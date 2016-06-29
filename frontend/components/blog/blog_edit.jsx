const React = require("react");
const BlogStore = require("../../stores/blog_store");
const BlogActions = require("../../actions/blog_actions");
const hashHistory = require("react-router").hashHistory;

const BlogEdit = React.createClass({
  getInitialState() {
    let blog = BlogStore.getBlog();
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
    BlogActions.getBlog(this.props.params.userId);
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
    let url = "/blogs/" + BlogStore.getBlog().owner_id;
    hashHistory.push(url);
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
      <form onSubmit={this.handleSubmit}>
        <h2>Blog Settings</h2>

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
          <button onClick={this.coverPhotoChange}>Upload Photo</button>

        <br/>
        <input type="submit" value="Save Changes"/>
      </form>
    </div>);

  }
});

module.exports = BlogEdit;
