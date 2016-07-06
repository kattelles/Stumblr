const React = require('react');
const PostActions = require("../../../actions/post_actions");

const AudioForm = React.createClass({

  getInitialState() {
    let link = "";
    let audioTitle = "";
    if (this.props.post) {
      link = this.props.post.audio_url;
      audioTitle = this.props.post.audio_title;
    }

    return ({link: link, audioTitle: audioTitle});
  },

  linkChange(e) {
    this.setState({link: e.target.value});
  },

  handleSubmit() {
    if (this.props.edit === "true") {

      PostActions.editPost({
        post: {
          id: this.props.post.id,
          post_type: "Audio",
          user_id: this.props.post.user_id,
          audio_url: this.state.link,
          audio_title: this.state.audioTitle
        }
      });

    } else {
    let id = this.props.user.id;
    PostActions.createPost({
      post: {
        post_type: "Audio",
        user_id: parseInt(id),
        audio_url: this.state.link,
        audio_title: this.state.audioTitle
      }
    });
  }
    this.props.close();
  },


    titleChange(e) {
      this.setState({audioTitle: e.target.value});
    },

  render: function() {
    return (
      <div id="audio">
        <div id="modal-header">{this.props.user.username}</div>
        <form>
          <div id="audio-outer">
          <input type="text" id="audio-form" onChange={this.linkChange}
            placeholder="Type or paste an audio URL" value={this.state.link}/>
          </div>


        <input id="link-title" onChange={this.titleChange} value={this.state.audioTitle}
              placeholder="Title (Required)" />


          <br/>
            <div id="footer">
              <div id="close-button" onClick={this.props.close}>Close</div>
              <div onClick={this.handleSubmit} id="post-button">{this.props.submitButton}</div>
            </div>
        </form>
      </div>
    );
  }

});

module.exports = AudioForm;
