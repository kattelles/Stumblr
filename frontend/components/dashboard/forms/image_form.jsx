const React = require('react');
const PostActions = require("../../../actions/post_actions");

const ImageForm = React.createClass({

  getInitialState() {

    let url = "";
    let imageCaption = "";
    let tags = [];
    if (this.props.post) {
      url = this.props.post.url;
      imageCaption = this.props.post.image_caption;
      tags = this.props.post.tags.map(tag => {
        return (`#${tag.name}`);
      });
      tags = tags.join(" ");
    }

    return ({url: url, imageCaption: imageCaption, tags: tags});
  },

  uploadImage(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results) {
      if(!error){
        this.setState({url: results[0].url});
      }
    }.bind(this));
  },

  captionChange(e) {
    this.setState({imageCaption: e.target.value});
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
          post_type: "Image",
          user_id: this.props.post.user_id,
          image_url: this.state.url,
          image_caption: this.state.imageCaption,
          tags: tags
        }
      });

    } else {
    let tags = this.state.tags.replace(/#/g, "").split(" ");
    let id = this.props.user.id;
    PostActions.createPost({
      post: {
        post_type: "Image",
        user_id: parseInt(id),
        image_url: this.state.url,
        image_caption: this.state.imageCaption,
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
        <div id="image-form">
          <div onClick={this.uploadImage}>
            <img id="image-camera"
              src="https://res.cloudinary.com/kattelles/image/upload/v1467442048/noun_26730_cc_p7i5vv.png"/>
            <br/>
          Upload Photo
          </div>
        </div>

          <input id="image-caption" onChange={this.captionChange}
            placeholder="Add a caption (optional)"
            value={this.state.imageCaption}/>

        <input onChange={this.tagChange}
          className="image-tags-input" placeholder="#tags" value={this.state.tags}/>

        <div id="footer">
          <div id="close-button" onClick={this.props.close}>Close</div>
          <div onClick={this.handleSubmit} id="post-button">{this.props.submitButton}</div>
        </div>
        </div>
    );
  }

});

module.exports = ImageForm;
