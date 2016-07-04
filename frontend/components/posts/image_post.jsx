const React = require('react');
const hashHistory = require("react-router").hashHistory;
const SessionStore = require("../../stores/session_store");

const ImagePost = React.createClass({

  // componentDidMount() {
  //   debugger
  // },

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
            0 likes
          </div>

            {footerToggle}

        </div>

      </div>
    );
  }

});

module.exports = ImagePost;
