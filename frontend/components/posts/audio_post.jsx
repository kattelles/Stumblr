const React = require('react');
const hashHistory = require("react-router").hashHistory;
const SessionStore = require("../../stores/session_store");

const AudioPost  = React.createClass({

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

    return (
      <div id="audio-post">

        <div id="post-header">
        </div>

        <div id="audio-audio">
          <audio type="audio/mpeg" controls >
            <source src={this.props.post.audio_url}/>
                Your browser does not support audio from Stumblr.
          </audio>
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

module.exports = AudioPost;
