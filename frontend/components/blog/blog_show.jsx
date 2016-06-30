const React = require("react");
const BlogStore = require("../../stores/blog_store");
const SessionStore = require("../../stores/session_store");
const BlogActions = require("../../actions/blog_actions");
const hashHistory = require('react-router').hashHistory;
const FollowActions = require("../../actions/follow_actions");

const BlogShow = React.createClass({
  getInitialState() {
    return ({blog: {}, currentUser: {}});
  },

  componentDidMount() {
    this.listener = BlogStore.addListener(this._onChange);
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    this.setState({currentUser: SessionStore.currentUser()});
    BlogActions.getBlog(this.props.params.userId);
  },

  componentWillUnmount() {
    this.listener.remove();
    this.sessionListener.remove();
  },

  componentWillReceiveProps(newProps) {
    BlogActions.getBlog(newProps.params.userId);
  },

  _onChange() {
    this.setState({blog: BlogStore.getBlog()});
  },

  _onSessionChange(){
    this.setState({currentUser: SessionStore.currentUser()});
  },

  backToDashboard() {
    hashHistory.push("/");
  },

  editBlog() {
    let url = `blog/${this.props.params.userId}/edit`;
    hashHistory.push(url);
  },

  follow() {
    FollowActions.follow({follow: {
      user_id: this.state.currentUser.id,
      blog_id: this.state.blog.id}
    });
  },

  unfollow() {
    let follow = BlogStore.getFollow(this.state.currentUser.id);
    FollowActions.unfollow(follow.id);
  },

  getToggle() {

    if (!this.state.blog) {
      return "";
    }

    if (this.state.blog.owner_id === this.state.currentUser.id) {
      return (
          <div id="blog-show-edit" onClick={this.editBlog}>
              <img src="https://res.cloudinary.com/kattelles/image/upload/v1467321393/edit-32_zkkgxx.png"/>
          </div>
      );
    } else {

      let button, clickMethod;
      if (BlogStore.isFollowing(this.state.currentUser.id))  {
        button = (
          <img src="https://res.cloudinary.com/kattelles/image/upload/v1467321538/minus-32_mqqko7.png"/>
        );
        clickMethod = this.unfollow;
      } else {
        button = (
          <img src="https://res.cloudinary.com/kattelles/image/upload/v1467321543/plus-32_kav2vv.png" />
        );
        clickMethod = this.follow;
      }

      return (
        <div id="blog-show-follow" onClick={clickMethod}><div>{button}</div></div>
      );
    }
  },

  render() {
    let toggleButton = this.getToggle();
    let avatar = this.state.blog.avatar;

    let numFollows = "";
    if (this.state.blog.follows) {
      numFollows = this.state.blog.follows.length;
    }

    return(
        <div className="blog-show">
          <img className="cover-photo" src={this.state.blog.cover_photo}/>
          <div id="blog-nav-bar">
            {toggleButton}
            <div id="blog-show-dashboard" onClick={this.backToDashboard}>
                <div id="blog-show-dashboard-inner">
                  <img src="https://res.cloudinary.com/kattelles/image/upload/v1467321223/house-32_pmj1gu.png"/>
               </div>
            </div>
          </div>
          <img className="avatar" src={avatar}/>
          <h1 className='blog-title'>{this.state.blog.title} </h1>
          <h3 className="blog-desc">{this.state.blog.description}</h3>
           <div>follows: {numFollows}</div>
        </div>

    );
  }

});

module.exports = BlogShow;
