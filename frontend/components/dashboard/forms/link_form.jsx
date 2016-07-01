const React = require('react');
const PostActions = require("../../../actions/post_actions");

const QuoteForm = React.createClass({

  getInitialState() {
    return ({link: ""});
  },

  quoteChange(e) {
    this.setState({link: e.target.value});
  },

  handleSubmit() {
    let id = this.props.user.id;
    PostActions.createPost({
      post: {
        post_type: "Link",
        user_id: parseInt(id),
        link_url: this.state.link,
      }
    });
    this.props.close();
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.linkChange}
            placeholder="Type or paste a URL" value={this.state.link}/>
          <br/>

          <input type="submit" value="Post"/>
        </form>
      </div>
    );
  }

});

module.exports = QuoteForm;
