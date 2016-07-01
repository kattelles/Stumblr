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
        <div onClick={this.uploadImage}>
          Upload Photo
        </div>
      </div>
    );
  }

});

module.exports = ImageForm;
