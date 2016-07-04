const React = require('react');
const hashHistory = require("react-router").hashHistory;
const SessionStore = require("../../stores/session_store");

const VideoPost  = React.createClass({

  settingsClick() {

  },

  likeClick() {

  },

  render: function() {

    let footerToggle;

    if (SessionStore.currentUser().id === this.props.post.user_id) {
      footerToggle = (<img id='post-toggle' onClick={this.settingsClick}
        src="https://res.cloudinary.com/kattelles/image/upload/v1467592809/settings-4-32_1_uj3ayg.png"/>);
    } else {
      footerToggle = <div onClick={this.likeClick} id='post-toggle'> like/unlike </div>;
    }

    let url = "https://www.youtube.com/embed/" + this.props.post.video_url.split("=")[1];
    return (
      <div id="video-post">

        <div id="post-header">
        </div>

        <div id="video-video">
        <iframe width="496" height="275"
        src={url}
        frameborder="0" allowfullscreen></iframe>
        </div>

        <div id="post-footer">
          <div id="post-likes">
            0 likes
          </div>

            {footerToggle}

        </div>

      </div>
    );
  }

});

module.exports = VideoPost;
