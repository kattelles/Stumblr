const React = require('react');
const hashHistory = require("react-router").hashHistory;
const BlogStore = require("../../../stores/blog_store");
const SessionStore = require("../../../stores/session_store");
const BlogActions = require("../../../actions/blog_actions");
const FollowActions = require("../../../actions/follow_actions");

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

  follow(blog) {
    FollowActions.follow({follow: {
      user_id: SessionStore.currentUser().id,
      blog_id: blog.id}
    });
  },

  unfollow(blog) {
    let userId = SessionStore.currentUser().id;

    let _follow;

    blog.follows.forEach(follow => {
      if (follow.user_id === userId) {
        _follow = follow;
      }
    });

    FollowActions.unfollow(_follow.id);
  },

  render: function() {
    if (!this.state) {
      return (<div/>);
    }

    let blogs = this.state.blogs.map(blog => {
      let button, clickMethod;
      let userId = SessionStore.currentUser().id;
      if (BlogStore.following(userId, blog))  {
        button = (
          <img src="https://res.cloudinary.com/kattelles/image/upload/v1467909078/minus-6-48_fn36vy.png"/>
        );
        clickMethod = this.unfollow.bind(this, blog);
      } else {
        button = (
          <img src="https://res.cloudinary.com/kattelles/image/upload/v1467909082/plus-6-48_msl2ng.png" />
        );
        clickMethod = this.follow.bind(this, blog);
      }

      return (
        <div id="rec-blog">
          <div className="rec-left">
          <img onClick={this.onAvatarClick.bind(this, blog.owner_id)}
            id="rec-avatar" src={blog.avatar}/>
          <div id="rec-text">
            <div className="rec-title" >{blog.title}</div>
            <div className="rec-desc" >{blog.description}</div>
          </div>
        </div>
            <div className="rec-follow" onClick={clickMethod}>{button}</div>
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
