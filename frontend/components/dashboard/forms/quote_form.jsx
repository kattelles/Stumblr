const React = require('react');
const PostActions = require("../../../actions/post_actions");

const QuoteForm = React.createClass({

  getInitialState() {
    let quote = "";
    let quoteSource = "";
    let tags = [];
    if (this.props.post) {
      quote = this.props.post.quote;
      quoteSource = this.props.post.quote_source;
      tags = this.props.post.tags.map(tag => {
        return (`#${tag.name}`);
      });
      tags = tags.join(" ");
    }
    return ({quote: quote, quoteSource: quoteSource, tags: tags});
  },

  quoteChange(e) {
    this.setState({quote: e.target.value});
  },

  quoteSourceChange(e) {
    this.setState({quoteSource: e.target.value});
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
          post_type: "Quote",
          user_id: this.props.post.user_id,
          quote: this.state.quote,
          quote_source: this.state.quoteSource,
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
        post_type: "Quote",
        user_id: parseInt(id),
        quote: this.state.quote,
        quote_source: this.state.quoteSource,
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
          <textarea id="quote" onChange={this.quoteChange}
            placeholder='"Quote"' value={this.state.quote}/>
          <br/>
          <input id="source" onChange={this.quoteSourceChange}
            placeholder="-- Source" value={this.state.quoteSource}/>
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

module.exports = QuoteForm;
