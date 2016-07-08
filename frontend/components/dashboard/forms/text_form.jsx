const React = require('react');
const PostActions = require("../../../actions/post_actions");

const TextForm = React.createClass({

  getInitialState() {
    let title = "";
    let content = "";
    let tags = [];
    if (this.props.post) {
      title = this.props.post.title;
      content = this.props.post.content;
      tags = this.props.post.tags.map(tag => {
        return (`#${tag.name}`);
      });
      tags = tags.join(" ");
    }


    return ({title: title, content: content, tags: tags});
  },

  titleChange(e) {
    this.setState({title: e.target.value});
  },

  contentChange(e) {
    this.setState({content: e.target.value});
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
          post_type: "Text",
          user_id: this.props.post.user_id,
          title: this.state.title,
          content: this.state.content,
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
        post_type: "Text",
        user_id: parseInt(id),
        title: this.state.title,
        content: this.state.content,
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
        <form id="post-inputs">
          <input id="post-text" onChange={this.titleChange}
            placeholder="Title" value={this.state.title}/>
          <br/>
          <textarea id="post-content" onChange={this.contentChange}
            placeholder="Your text here" value={this.state.content}/>
          <br/>
          <input onChange={this.tagChange}
            className="tags-input" placeholder="#tags" value={this.state.tags}/>
          <div id="footer">
            <div id="close-button" onClick={this.props.close}>Close</div>
            <div onClick={this.handleSubmit} id="post-button">{this.props.submitButton}</div>
          </div>
        </form>
      </div>
    );
  }

});

module.exports = TextForm;
