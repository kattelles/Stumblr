const React = require('react');
const PostActions = require("../../../actions/post_actions");

const VideoForm = React.createClass({

  getInitialState() {
    let link = "";
    let title = "";
    let tags = [];
    if (this.props.post) {
      link = this.props.post.video_url;
      title = this.props.post.video_title;
      tags = this.props.post.tags.map(tag => {
        return (`#${tag.name}`);
      });
      tags = tags.join(" ");
    }
    return ({link: link, title: title, tags: tags});
  },

  linkChange(e) {
    this.setState({link: e.target.value});
  },


  titleChange(e) {
    this.setState({title: e.target.value});
  },

  tagChange(e) {
    this.setState({tags: e.target.value});
  },

  handleSubmit() {

    if (this.props.edit === "true") {
      let tags = [];
      if (this.state.tags.length > 0) {
        tags = this.state.tags.replace(/ /g, "");
        tags = tags.split("#").slice(1);
      }
      PostActions.editPost({
        post: {
          id: this.props.post.id,
          post_type: "Video",
          user_id: this.props.post.user_id,
          video_url: this.state.link,
          video_title: this.state.title,
          tags: tags
        }
      });
    } else {
      let tags = [];
      if (this.state.tags.length > 0) {
        tags = this.state.tags.replace(/#/g, "").split(" ");
      }
      let id = this.props.user.id;
      PostActions.createPost({
        post: {
          post_type: "Video",
          user_id: parseInt(id),
          video_url: this.state.link,
          video_title: this.state.title,
          tags: tags
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
            <input onChange={this.tagChange}
              className="image-tags-input" placeholder="#tags" value={this.state.tags}/>
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
