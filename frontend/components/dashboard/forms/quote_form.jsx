const React = require('react');
const PostActions = require("../../../actions/post_actions");

const QuoteForm = React.createClass({

  getInitialState() {
    return ({quote: "", quoteSource: ""});
  },

  quoteChange(e) {
    this.setState({quote: e.target.value});
  },

  quoteSourceChange(e) {
    this.setState({quoteSource: e.target.value});
  },

  handleSubmit() {
    let id = this.props.user.id;
    PostActions.createPost({
      post: {
        post_type: "Quote",
        user_id: parseInt(id),
        quote: this.state.quote,
        quote_source: this.state.quoteSource
      }
    });
    this.props.close();
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.quoteChange}
            placeholder='Quote' value={this.state.quote}/>
          <br/>
          <input onChange={this.quoteSourceChange}
            placeholder="Source" value={this.state.quoteSource}/>
          <br/>
          <input type="submit" value="Post"/>
        </form>
      </div>
    );
  }

});

module.exports = QuoteForm;
