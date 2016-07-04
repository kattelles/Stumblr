const React = require('react');
const PostStore = require("../../stores/post_store");

const TextPost = require("../posts/text_post");
const ImagePost = require("../posts/image_post");
const LinkPost = require("../posts/link_post");
const QuotePost = require("../posts/quote_post");
const AudioPost = require("../posts/audio_post");
const VideoPost = require("../posts/video_post");

const PostActions = require("../../actions/post_actions");

const PostFeed = React.createClass({
  getInitialState() {
    return ({posts: []});
  },

  componentDidMount() {
    this.postListener = PostStore.addListener(this.postsChange);
    PostActions.fetchFeed();
  },

  componentWillUnmount() {
    this.postListener.remove();
  },

  postsChange() {
    this.setState({posts: PostStore.allPosts()});
  },

  render: function() {
    if (this.state.posts.length === 0) {
      return (<div className="loader">Loading...</div>);
    }

    let posts = [];
    this.state.posts[0].forEach(post => {

      switch (post.post_type) {
        case "Text":
          posts.push(<TextPost key={post.id} post={post}/>);
          break;

        case "Image":
          posts.push(<ImagePost key={post.id} post={post}/>);
          break;
        case "Quote":
          posts.push(<QuotePost key={post.id} post={post}/>);
          break;
        case "Link":
          posts.push(<LinkPost key={post.id} post={post}/>);
          break;
        case "Audio":
          posts.push(<AudioPost key={post.id} post={post}/>);
          break;
        case "Video":
          posts.push(<VideoPost key={post.id} post={post}/>);
          break;
      }
    });
    return (
      <div id="post-feed">
        {posts}
      </div>
    );
  }

});

module.exports = PostFeed;
