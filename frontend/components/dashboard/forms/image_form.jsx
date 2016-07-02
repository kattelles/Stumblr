const React = require('react');
const PostActions = require("../../../actions/post_actions");

const ImageForm = React.createClass({

  getInitialState() {
    return ({url: ""});
  },

  uploadImage(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results) {
      if(!error){
        this.setState({url: results[0].url});
      }
    }.bind(this));
  },


  handleSubmit() {
    let id = this.props.user.id;
    PostActions.createPost({
      post: {
        post_type: "Image",
        user_id: parseInt(id),
        image_url: this.state.url,
      }
    });
    this.props.close();
  },

  render: function() {
    return (
      <div>
        <div id="modal-header">{this.props.user.username}</div>
        <div id="image-form">
          <div onClick={this.uploadImage}>
            <img id="image-camera" src="http://res.cloudinary.com/kattelles/image/upload/v1467442048/noun_26730_cc_p7i5vv.png"/>
            <br/>
          Upload Photo
          </div>
        </div>

        <div id="footer">
          <div id="close-button" onClick={this.props.close}>Close</div>
        </div>
        </div>
    );
  }

});

module.exports = ImageForm;
