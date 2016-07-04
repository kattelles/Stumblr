const React = require('react');
const PostActions = require("../../../actions/post_actions");

const VideoForm = React.createClass({

  getInitialState() {
    return ({link: ""});
  },

  linkChange(e) {
    this.setState({link: e.target.value});
  },

  handleSubmit() {
    let id = this.props.user.id;
    PostActions.createPost({
      post: {
        post_type: "Video",
        user_id: parseInt(id),
        video_url: this.state.link,
      }
    });
    this.props.close();
  },

  render: function() {
    return (
      <div>
        <div id="modal-header">{this.props.user.username}</div>
        <form>
          <div id="link-outer">
          <input type="text" id="link-form" onChange={this.linkChange}
            placeholder="Type or paste a video URL" value={this.state.link}/>
          </div>
          <br/>
            <div id="footer">
              <div id="close-button" onClick={this.props.close}>Close</div>
              <div onClick={this.handleSubmit} id="post-button">Post</div>
            </div>
        </form>
      </div>
    );
  }

});

module.exports = VideoForm;
