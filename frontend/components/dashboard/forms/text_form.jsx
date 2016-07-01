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
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.titleChange}
            placeholder="Title" value={this.state.title}/>
          <br/>
          <input onChange={this.contentChange}
            placeholder="Your text here" value={this.state.content}/>
          <br/>
          <input type="submit" value="Post"/>
        </form>
      </div>
    );
  }

});

module.exports = TextForm;
