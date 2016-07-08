const React = require('react');
const PostActions = require("../../../actions/post_actions");

const LinkForm = React.createClass({

  getInitialState() {
    let link = "";
    let linkTitle = "";
    let tags = [];
    if (this.props.post) {
      link = this.props.post.link_url;
      linkTitle = this.props.post.link_title;
      tags = this.props.post.tags.map(tag => {
        return (`#${tag.name}`);
      });
      tags = tags.join(" ");
    }

    return ({link: link, linkTitle: linkTitle, tags: tags});
  },

  linkChange(e) {
    this.setState({link: e.target.value});
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
          post_type: "Link",
          user_id: this.props.post.user_id,
          link_url: this.state.link,
          link_title: this.state.linkTitle,
          tags: tags
        }
      });

    } else {
    let tags = this.state.tags.replace(/#/g, "").split(" ");
    let id = this.props.user.id;
    PostActions.createPost({
      post: {
        post_type: "Link",
        user_id: parseInt(id),
        link_url: this.state.link,
        link_title: this.state.linkTitle,
        tags: tags
      }
    });
  }
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
                placeholder="Title (Required)" />

          <br/>

            <input onChange={this.tagChange}
              className="image-tags-input" placeholder="#tags" value={this.state.tags}/>
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
