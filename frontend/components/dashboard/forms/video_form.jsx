const React = require('react');
const PostActions = require("../../../actions/post_actions");

const VideoForm = React.createClass({

  getInitialState() {
    let link = "";
    let title = "";
    if (this.props.post) {
      link = this.props.post.video_url;
      title = this.props.post.video_title;
    }
    return ({link: link, title: title});
  },

  linkChange(e) {
    this.setState({link: e.target.value});
  },


  titleChange(e) {
    this.setState({title: e.target.value});
  },

  handleSubmit() {

    if (this.props.edit === "true") {
      PostActions.editPost({
        post: {
          id: this.props.post.id,
          post_type: "Video",
          user_id: this.props.post.user_id,
          video_url: this.state.link,
          video_title: this.state.title
        }
      });
    } else {
      let id = this.props.user.id;
      PostActions.createPost({
        post: {
          post_type: "Video",
          user_id: parseInt(id),
          video_url: this.state.link,
          video_title: this.state.title
        }
      });
    }
    this.props.close();
  },

  render: function() {
    return (
      <div>
        <div id="modal-header">{this.props.user.username}</div>
        <form>
          <div id="audio-outer">
          <input type="text" id="audio-form" onChange={this.linkChange}
            placeholder="Type or paste YouTube watch URL" value={this.state.link}/>
          </div>

            <input id="link-title" onChange={this.titleChange}
              value={this.state.title}
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

module.exports = VideoForm;
