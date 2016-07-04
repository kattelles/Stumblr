const React = require('react');
const TextPost = require("../posts/text_post");
const ImagePost = require("../posts/image_post");
const QuotePost = require("../posts/quote_post");
const LinkPost = require("../posts/link_post");
const AudioPost = require("../posts/audio_post");
const VideoPost = require("../posts/video_post");


const BlogFeed = React.createClass({

  render: function() {
    let posts = [];

    this.props.posts.map(post => {
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
      <div id="blog-feed"> {posts} </div>
    );
  }

});

module.exports = BlogFeed;
