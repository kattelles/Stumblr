const React = require('react');
const hashHistory = require("react-router").hashHistory;
const BlogStore = require("../../../stores/blog_store");
const SessionStore = require("../../../stores/post_store");
const BlogActions = require("../../../actions/blog_actions");

const RecBlogs= React.createClass({
  getInitialState() {
    return ({blogs: []});
  },

  componentDidMount() {
    this.listener = BlogStore.addListener(this.onChange);
    BlogActions.getRecBlogs();
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  onChange() {
    this.setState({blogs: BlogStore.recs()});
  },

  exploreClick() {
    hashHistory.push("explore");
  },

  onAvatarClick(id) {
    let url = "blogs/" + id;
    hashHistory.push(url);
  },

  render: function() {
    if (!this.state) {
      return (<div/>);
    }

    let blogs = this.state.blogs.map(blog => {
      return (
        <div id="rec-blog">
          <img onClick={this.onAvatarClick.bind(this, blog.owner_id)}
            id="rec-avatar" src={blog.avatar}/>
          <div id="rec-text">
            <div className="rec-title" >{blog.title}</div>
            <div className="rec-desc" >{blog.description}</div>
          </div>
        </div>
      );
    });

    return (
      <div id="side-bar">
        <div id="side-header">Recommended Blogs</div>
        <div>
          {blogs}
        </div>
        <div className="explore-click"
          onClick={this.exploreClick}>Explore more of Stumblr!</div>
      </div>
    );
  }

});

module.exports = RecBlogs;
