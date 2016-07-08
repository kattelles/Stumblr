const React = require('react');
const PostActions = require("../../../actions/post_actions");
const hashHistory = require("react-router").hashHistory;

const Search = React.createClass({
  getInitialState () {
    return({input: ""});
  },

  inputChange(e) {
    this.setState({input: e.target.value.replace(/#/, "")});
  },

  handleSubmit() {
    PostActions.getSearchResults(this.state.input);
    hashHistory.push("search");
  },

  render: function() {
    return (
      <div className="search">
        <input onChange={this.inputChange} placeholder="Search #tags"/>
        <div className="search-submit"
          onClick={this.handleSubmit}>
          <img src="https://res.cloudinary.com/kattelles/image/upload/v1467929817/search-14-32_fhtipb.png"/>
        </div>
      </div>
    );
  }

});

module.exports = Search;
