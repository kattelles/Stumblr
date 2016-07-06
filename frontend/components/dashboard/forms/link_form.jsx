const React = require('react');
const PostActions = require("../../../actions/post_actions");

const LinkForm = React.createClass({

  getInitialState() {
    return ({link: "", linkTitle: ""});
  },

  linkChange(e) {
    this.setState({link: e.target.value});
  },

  handleSubmit() {
    let id = this.props.user.id;
    PostActions.createPost({
      post: {
        post_type: "Link",
        user_id: parseInt(id),
        link_url: this.state.link,
        link_title: this.state.linkTitle
      }
    });
    this.props.close();
  },

  titleChange(e) {
    this.setState({linkTitle: e.target.value});
  },

  render: function() {
    return (
      <div>
        <div id="modal-header">{this.props.user.username}</div>
        <form>
          <div id="link-outer">
          <input type="text" id="link-form" onChange={this.linkChange}
            placeholder="Type or paste a URL" value={this.state.link}/>
          </div>

          <input id="link-title" onChange={this.titleChange} value={this.state.linkTitle}
                placeholder="Link Title (Required)" />

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

module.exports = LinkForm;
