const React = require('react');
const hashHistory = require("react-router").hashHistory;
const SessionStore = require("../../stores/session_store");


const QuotePost = React.createClass({
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
      <div id="quote-post">

        <div id="post-header">

        </div>

        <h1 id="quote-quote">
          "{this.props.post.quote}"
        </h1>

        <div id="quote-source">
          -- {this.props.post.quote_source}
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

module.exports = QuotePost;
