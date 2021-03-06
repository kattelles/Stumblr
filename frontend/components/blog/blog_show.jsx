const React = require("react");
const BlogStore = require("../../stores/blog_store");
const SessionStore = require("../../stores/session_store");
const PostStore = require("../../stores/post_store");
const BlogActions = require("../../actions/blog_actions");
const hashHistory = require('react-router').hashHistory;
const FollowActions = require("../../actions/follow_actions");
const BlogEdit = require("./blog_edit");
const BlogFeed = require("./blog_feed");
const Modal = require("react-modal");
const PostActions = require("../../actions/post_actions");

const BlogShow = React.createClass({
  getInitialState() {
    return ({blog: "", currentUser: SessionStore.currentUser(),
      modalOpen: false, posts: []});
  },

  componentDidMount() {
    this.listener = BlogStore.addListener(this._onChange);
    this.postListener = PostStore.addListener(this.postChange);
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    BlogActions.getBlog(this.props.params.userId);
    PostActions.getBlogPosts(this.props.params.userId);
  },

  componentWillUnmount() {
    this.listener.remove();
    this.sessionListener.remove();
    this.postListener.remove();
  },

  componentWillReceiveProps(newProps) {
    BlogActions.getBlog(newProps.params.userId);
    PostActions.getBlogPosts(newProps.params.userId);
  },

  _onChange() {
    this.setState({blog: BlogStore.getBlog()});
  },

  postChange() {
    this.setState({posts: PostStore.allPosts()});
  },

  _onSessionChange(){
    this.setState({currentUser: SessionStore.currentUser()});
  },

  backToDashboard() {
    hashHistory.push("/");
  },

  editBlog() {
    this.setState({modalOpen: true});
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

    let tooltipText;
    if (parseInt(this.props.params.userId) === this.state.currentUser.id) {
      return (
          <div className="blog-show-edit" className="tooltip" onClick={this.editBlog}>
              <span className="tooltiptext">Edit</span>
              <img className="blog-show-edit-img"
                 src="https://res.cloudinary.com/kattelles/image/upload/v1467321393/edit-32_zkkgxx.png"/>
          </div>
      );
    } else {
      let button, clickMethod;
      if (BlogStore.isFollowing(this.state.currentUser.id))  {
        button = (
          <img className="blog-show-follow-img"
            src="https://res.cloudinary.com/kattelles/image/upload/v1467321538/minus-32_mqqko7.png"/>
        );
        clickMethod = this.unfollow;
        tooltipText = "Unfollow";
      } else {
        button = (
          <img className="blog-show-follow-img"
            src="https://res.cloudinary.com/kattelles/image/upload/v1467321543/plus-32_kav2vv.png" />
        );
        clickMethod = this.follow;
          tooltipText = "Follow";
      }

      return (
        <div className="blog-show-follow" className="tooltip"
          onClick={clickMethod}><div>{button}
        <span className="tooltiptext">{tooltipText}</span></div></div>
      );
    }
  },

  onModalClose() {
    this.setState({modalOpen: false});
  },

  render() {
    if (this.state.blog === "") {
      return (<div className="loader">Loading...</div>);
    }
    let toggleButton = this.getToggle();
    let avatar = this.state.blog.avatar;

    let numFollows = "";
    if (this.state.blog.follows) {
      numFollows = this.state.blog.follows.length;
    }

    let coverPhoto = {
      backgroundImage: 'url(' + this.state.blog.cover_photo + ')'
    };

    return(
        <div className="blog-show">
          <div className="cover-photo" style={coverPhoto}/>
          <div className="blog-nav-bar">
            {toggleButton}
            <div className="blog-show-dashboard"
              className="tooltip" onClick={this.backToDashboard}>
              <span className="tooltiptext">Home</span>
                <div id="home">
                  <img src="https://res.cloudinary.com/kattelles/image/upload/v1467321223/house-32_pmj1gu.png"/>
               </div>
            </div>
          </div>
          <img className="avatar" src={avatar}/>
          <h1 className='blog-title'>{this.state.blog.title} </h1>
          <h3 className="blog-desc">{this.state.blog.description}</h3>
          <div className="followers">{numFollows} Follower(s)</div>

          <BlogFeed posts={this.state.posts}/>

         <Modal
           className="blog-edit-modal"
           isOpen={this.state.modalOpen}
           onRequestClose={this.onModalClose}
           onAfterOpen={this.onModalOpen}>
           <BlogEdit close={this.onModalClose} blog={this.state.blog}/>
         </Modal>

        </div>

    );
  }

});

module.exports = BlogShow;
