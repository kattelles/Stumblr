const React = require('react');
const PostActions = require("../../../actions/post_actions");

const TextForm = React.createClass({

  getInitialState() {
    return ({title: "", content: ""});
  },

  titleChange(e) {
    this.setState({title: e.target.value});
  },

  contentChange(e) {
    this.setState({content: e.target.value});
  },

  handleSubmit() {
    let id = this.props.user.id;
    PostActions.createPost({
      post: {
        post_type: "Text",
        user_id: parseInt(id),
        title: this.state.title,
        content: this.state.content
      }
    });
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
