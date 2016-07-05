const React = require('react');
const hashHistory = require("react-router").hashHistory;
const SessionStore = require("../../stores/session_store");
const LikeActions = require("../../actions/like_actions");
const ImagePost = React.createClass({
  settingsClick() {

  },

  avatarClick() {
    let url = "blogs/" + this.props.post.user.id;
    hashHistory.push(url);
  },


  likeClick() {
    LikeActions.like({
      like: {
      user_id: SessionStore.currentUser().id,
      post_id: this.props.post.id }
    });
  },

  unlikeClick() {
    let _like;
    let cu = SessionStore.currentUser().id;
    this.props.post.likes.forEach (like => {
      if (like.user_id === cu) {
        _like = like;
      }
    });

    LikeActions.unlike(_like.id);
  },

  render: function() {

    let footerToggle;

    if (SessionStore.currentUser().id === this.props.post.user_id) {
      footerToggle = (<img id='post-toggle' onClick={this.settingsClick}
        src="https://res.cloudinary.com/kattelles/image/upload/v1467592809/settings-4-32_1_uj3ayg.png"/>);
    } else if (this.props.isLiked) {
        footerToggle = <div onClick={this.unlikeClick} id='post-toggle'>
          <img src="https://res.cloudinary.com/kattelles/image/upload/v1467744183/hearts_f0tsvw.png" /></div>;
    } else {
      footerToggle = <div onClick={this.likeClick} id='post-toggle'>
      <img src="https://res.cloudinary.com/kattelles/image/upload/v1467744232/dislike_lm7egs.png" />
      </div>;
    }

    return (
      <div id="post">
        <img id="post-avatar" onClick={this.avatarClick}
          src={this.props.post.user.avatar}/>

      <div id="image-post">

        <div id="post-header">

        </div>

        <div>
          <img id="image-image" src={this.props.post.image_url}/>
        </div>

        <div id="image-caption">
          {this.props.post.image_caption}
        </div>

        <div id="post-footer">
          <div id="post-likes">
            {this.props.post.likes.length} likes
          </div>

            {footerToggle}

        </div>
      </div>
      </div>
    );
  }

});

module.exports = ImagePost;
