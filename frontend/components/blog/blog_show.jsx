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
    this.listener = BlogStore.addListener(this._onChange);
    let currentUser = SessionStore.currentUser();
    BlogActions.getBlog(currentUser.id);
  },

    componentWillUnmount() {
      this.listener.remove();
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
    let avatar = SessionStore.currentUser().avatar;
    return(
        <div className="blog-show">
          <img className="cover-photo" src={this.state.blog.cover_photo}/>
          <div id="blog-nav-bar">
            <button onClick={this.backToDashboard}>Back to Dashboard</button>
            <button onClick={this.editBlog}>Edit Blog</button>
          </div>
          <img className="avatar" src={avatar}/>
          <h1 className='blog-title'>{this.state.blog.title} </h1>
          <p className="blog-desc">{this.state.blog.description}</p>
        </div>

    );
  }

});

module.exports = BlogShow;
