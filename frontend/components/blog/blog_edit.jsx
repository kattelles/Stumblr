const React = require("react");
const BlogStore = require("../../stores/blog_store");
const BlogActions = require("../../actions/blog_actions");
const hashHistory = require("react-router").hashHistory;

const BlogEdit = React.createClass({
  getInitialState() {
    let blog = this.props.blog;
    let title = blog.title ? blog.title : "";
    let description = blog.description ? blog.description : "";
    let coverPhoto = blog.cover_photo ? blog.cover_photo : "";

    return({
      title: title,
      description: description,
      coverPhoto: coverPhoto});
  },

  componentDidMount() {
    this.listener = BlogStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  _onChange() {
    let blog = BlogStore.getBlog();
    let title = blog.title ? blog.title : "";
    let description = blog.description ? blog.description : "";
    let coverPhoto = blog.cover_photo ? blog.cover_photo : "";

    this.setState({
      title: title,
      description: description,
      coverPhoto: coverPhoto});
  },

  titleChange(e) {
    this.setState({title: e.target.value});
  },

  descriptionChange(e) {
    this.setState({description: e.target.value});
  },

  coverPhotoChange(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        this.setState({coverPhoto: results[0].url});
      }
    }.bind(this));
  },

  updateSuccess(){
    this.props.close();
  },

  handleSubmit() {
    BlogActions.updateBlog({
      id: BlogStore.getBlog().id,
      title: this.state.title,
      description: this.state.description,
      cover_photo: this.state.coverPhoto
    }, this.updateSuccess);
  },

  render() {
    return(<div>

        <h1 id="user-edit-header">Blog Settings</h1>

        <div id="blog-edit-form">
          <label>Title: </label>
          <input type="text"
                onChange={this.titleChange}
                value={this.state.title}/>

          <br/>

          <label>Description: </label>
          <input type="text"
              onChange={this.descriptionChange}
              value={this.state.description}/>

          <br/>

            <label>Cover Photo: </label>
            <div id="upload-image" onClick={this.coverPhotoChange}>
              <div id="upload-text">Upload Photo</div> </div>

          <br/>
        </div>
            <div id="footer">
              <div id="close-button" onClick={this.props.close}>Close</div>
              <div id="post-button" onClick={this.handleSubmit}>Save</div>
        </div>
    </div>);
  }
});

module.exports = BlogEdit;
