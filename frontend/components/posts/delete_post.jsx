var React = require('react');
const PostActions = require("../../actions/post_actions");

const DeletePost = React.createClass({
  deletePost() {
    PostActions.deletePost(this.props.post.id);
    this.props.close();
  },

  render: function() {
    return (
      <div id="post-delete">
        Are you sure you want to delete this post?
        <div id="delete-buttons">
          <div id="post-delete-btn-cancel" onClick={this.props.close}>
            <span>Cancel</span></div>
          <div id="post-delete-btn-ok" onClick={this.deletePost}>
            <span>OK</span></div>
        </div>
      </div>
    );
  }

});

module.exports = DeletePost;
