const React = require('react');
const PostActions = require("../../actions/post_actions");
const TextForm = require("../dashboard/forms/text_form");
const ImageForm = require("../dashboard/forms/image_form");
const QuoteForm = require("../dashboard/forms/quote_form");
const LinkForm = require("../dashboard/forms/link_form");
const VideoForm = require("../dashboard/forms/video_form");
const AudioForm = require("../dashboard/forms/audio_form");
const SessionStore = require("../../stores/session_store");

const EditPost = React.createClass({
  getInitialState() {
    return ({user: SessionStore.currentUser()});
  },

  render: function() {
    let component;
    switch (this.props.post.post_type) {
      case "Text":
        component = <TextForm edit="true" post={this.props.post}
          submitButton="Save" user={this.state.user}
          close={this.props.close}/>;
        break;
      case "Image":
        component = <ImageForm edit="true" post={this.props.post}
          submitButton="Save" user={this.state.user}
          close={this.props.close}/>;
        break;
      case "Quote":
        component = <QuoteForm edit="true" post={this.props.post}
          submitButton="Save" user={this.state.user}
          close={this.props.close}/>;
        break;
      case "Link":
        component = <LinkForm edit="true" post={this.props.post}
          submitButton="Save" user={this.state.user}
          close={this.props.close}/>;
        break;
      case "Audio":
        component = <AudioForm edit="true" post={this.props.post}
          submitButton="Save" user={this.state.user}
          close={this.props.close}/>;
        break;
      case "Video":
        component = <VideoForm edit="true" post={this.props.post}
          submitButton="Save" user={this.state.user}
          close={this.props.close}/>;
        break;
      }
    return (
      <div>
      {component}
    </div>
    );
  }

});

module.exports = EditPost;
