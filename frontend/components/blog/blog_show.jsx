const React = require("react");
const BlogStore = require("../../stores/blog_store");
const SessionStore = require("../../stores/session_store");
const BlogActions = require("../../actions/blog_actions");
const hashHistory = require('react-router').hashHistory;

const BlogShow = React.createClass({
  getInitialState() {
    return ({blog: {}});
  },

  componentDidMount() {
    BlogStore.addListener(this._onChange);
    let currentUser = SessionStore.currentUser();
    BlogActions.getBlog(currentUser.id);
  },

  _onChange() {
    this.setState({blog: BlogStore.getBlog()});
  },

  backToDashboard() {
    hashHistory.push("/");
  },

  editBlog() {
    let url = `blog/${this.props.params.userId}/edit`;
    hashHistory.push(url);
  },

  render() {
    return(
      <div className="blog-show-outer">
        <div className="blog-show">
          <h1> My Blog </h1>
          <p> title: {this.state.blog.title} </p>
          <p> description: {this.state.blog.description} </p>
          <p> id: {this.state.blog.id} </p>
          <p> owner_id: {this.state.blog.owner_id} </p>
          <button onClick={this.backToDashboard}>Back to Dashboard</button>
          <button onClick={this.editBlog}>Edit Blog</button>
        </div>
      </div>
    );
  }

});

module.exports = BlogShow;
