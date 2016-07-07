const React = require('react');
const PostStore = require("../../stores/post_store");
const SessionStore = require("../../stores/session_store");
const TextPost = require("../posts/text_post");
const ImagePost = require("../posts/image_post");
const LinkPost = require("../posts/link_post");
const QuotePost = require("../posts/quote_post");
const AudioPost = require("../posts/audio_post");
const VideoPost = require("../posts/video_post");

const PostActions = require("../../actions/post_actions");

const PostFeed = React.createClass({
  getInitialState() {
    return ({posts: undefined});
  },

  componentDidMount() {
    this.postListener = PostStore.addListener(this.postsChange);
    PostActions.fetchFeed();
  },

  componentWillUnmount() {
    this.postListener.remove();
  },

  postsChange() {
    // debugger
    this.setState({posts: PostStore.allPosts()});
  },

  isLiked(post) {
    let liked = false;
    post.likes.forEach(like => {
      if (like.user_id === SessionStore.currentUser().id) {
        liked = true;
      }
    });
    return liked;
  },

  render: function() {
    if (!this.state.posts) {
      return (<div className="loader">Loading...</div>);
    }

    let posts = [];
    this.state.posts.forEach(post => {
      // debugger
      switch (post.post_type) {
        case "Text":
          posts.push(<TextPost isLiked={this.isLiked(post)}
          key={post.id} post={post}/>);
          break;
        case "Image":
          posts.push(<ImagePost isLiked={this.isLiked(post)}
          key={post.id} post={post}/>);
          break;
        case "Quote":
          posts.push(<QuotePost isLiked={this.isLiked(post)}
          key={post.id} post={post}/>);
          break;
        case "Link":
          posts.push(<LinkPost isLiked={this.isLiked(post)}
          key={post.id} post={post}/>);
          break;
        case "Audio":
          posts.push(<AudioPost isLiked={this.isLiked(post)}
          key={post.id} post={post}/>);
          break;
        case "Video":
          posts.push(<VideoPost isLiked={this.isLiked(post)} key={post.id} post={post}/>);
          break;
      }
    });
    return (
      <div id="post-feed group">
        {posts}
      </div>
    );
  }

});

module.exports = PostFeed;
