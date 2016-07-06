const React = require('react');
const PostActions = require("../../../actions/post_actions");

const QuoteForm = React.createClass({

  getInitialState() {
    let quote = "";
    let quoteSource = "";
    if (this.props.post) {
      quote = this.props.post.quote;
      quoteSource = this.props.post.quote_source;
    }
    return ({quote: quote, quoteSource: quoteSource});
  },

  quoteChange(e) {
    this.setState({quote: e.target.value});
  },

  quoteSourceChange(e) {
    this.setState({quoteSource: e.target.value});
  },

  handleSubmit() {
    if (this.props.edit === "true") {

      PostActions.editPost({
        post: {
          id: this.props.post.id,
          post_type: "Quote",
          user_id: this.props.post.user_id,
          quote: this.state.quote,
          quote_source: this.state.quoteSource
        }
      });

    } else {

    let id = this.props.user.id;
    PostActions.createPost({
      post: {
        post_type: "Quote",
        user_id: parseInt(id),
        quote: this.state.quote,
        quote_source: this.state.quoteSource
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
