const React = require('react');
const Masonry = require('react-masonry-component');
const LikeActions = require("../../actions/like_actions");
const SessionStore = require("../../stores/session_store");
const hashHistory = require("react-router").hashHistory;

const ExploreFeed  = React.createClass({
  likeClick(post) {
    LikeActions.like({
      like: {
      user_id: SessionStore.currentUser().id,
      post_id: post.id }
    });
  },

  unlikeClick(post) {
    let _like;
    let cu = SessionStore.currentUser().id;
    post.likes.forEach (like => {
      if (like.user_id === cu) {
        _like = like;
      }
    });

    LikeActions.unlike(_like.id);
  },

  isLiked(post) {
    let userId = SessionStore.currentUser().id;
    let liked = false;
    post.likes.forEach(like => {
      if (like.user_id === userId) {
        liked = true;
      }
    });

    if (liked) {
    return (<div onClick={this.unlikeClick.bind(this, post)} id='post-toggle'>
      <img src="https://res.cloudinary.com/kattelles/image/upload/v1467744183/hearts_f0tsvw.png" />
      </div>);
      } else {
        return (<div onClick={this.likeClick.bind(this, post)} id='post-toggle'>
          <img src="https://res.cloudinary.com/kattelles/image/upload/v1467744232/dislike_lm7egs.png" />
        </div>);
      }
  },

  headerClick(post) {
    let url = "blogs/" + post.user_id;
    hashHistory.push(url);
  },


  render: function() {

    let posts = [];
    this.props.posts.forEach (post => {
      switch (post.post_type) {
        case "Text":
          posts.push(
            <div id="explore-post">
              <div onClick={this.headerClick.bind(this, post)}
                  id="ex-header">
                  {post.user.username}
              </div>
              <div id="ex-title">{post.title}</div>
              <div id="ex-content">{post.content}</div>
                <div id="post-footer">
                  <div id="post-likes">
                    {post.likes.length} likes
                  </div>
                    {this.isLiked(post)}
                  </div>
            </div>
          );
          break;
        case "Image":
          posts.push(
            <div id="explore-post">
              <div onClick={this.headerClick.bind(this, post)}
                id="ex-header">{post.user.username}</div>
                  <img id="image-image" src={post.image_url}/>
                  <div id="image-caption">{post.image_caption}</div>
              <div id="post-footer">
                <div id="post-likes">
                  {post.likes.length} likes
                </div>
                  {this.isLiked(post)}
                </div>
            </div>
          );
          break;
        case "Quote":
          posts.push(
            <div id="explore-post">
              <div onClick={this.headerClick.bind(this, post)}
                id="ex-header">{post.user.username}</div>
              <div id="ex-quote">"{post.quote}"</div>
              <div id="ex-quote-source">{post.quote_source}</div>
                <div id="post-footer">
                  <div id="post-likes">
                    {post.likes.length} likes
                  </div>
                    {this.isLiked(post)}
                  </div>
            </div>
          );
          break;
        case "Link":
          posts.push(
            <div id="explore-post">
              <div onClick={this.headerClick.bind(this, post)}
                id="ex-header">{post.user.username}</div>
              <div id="link-post-ex">
                  <a id="link-ex"
                    href={post.link_url}>{post.link_title}</a>
                </div>
                <div id="post-footer">
                  <div id="post-likes">
                    {post.likes.length} likes
                  </div>
                    {this.isLiked(post)}
                  </div>
            </div>
          );

          break;
        case "Audio":
          posts.push(
            <div id="explore-post">
              <div onClick={this.headerClick.bind(this, post)}
                id="ex-header">{post.user.username}</div>
                <div id="audio-title">{post.audio_title}</div>

                <div id="ex-audio">
                  <audio type="audio/mpeg" controls >
                    <source src={post.audio_url}/>
                        Your browser does not support audio from Stumblr.
                  </audio>
                </div>
                <div id="post-footer">
                  <div id="post-likes">
                    {post.likes.length} likes
                  </div>
                    {this.isLiked(post)}
                  </div>
            </div>
          );
          break;
      case "Video":
      let url = "https://www.youtube.com/v/" + post.video_url.split("=")[1];
        posts.push(
          <div id="explore-post">
            <div onClick={this.headerClick.bind(this, post)}
              id="ex-header">{post.user.username}</div>
              <div id="video-video">
              <iframe width="296" height="200"
              src={url}
              frameborder="0" allowfullscreen></iframe>
              </div>
              <div id="post-footer">
                <div id="post-likes">
                  {post.likes.length} likes
                </div>
                  {this.isLiked(post)}
                </div>
          </div>
        );

        break;
      }
    });

    return (
      <Masonry className={"explore-feed"}>
        {posts}
      </Masonry>
    );
  }

});

module.exports = ExploreFeed;
