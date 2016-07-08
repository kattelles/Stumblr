const React = require('react');
const NavBar = require("../../dashboard/nav_bar");
const PostStore = require("../../../stores/post_store");
const ExploreFeed = require("../../explore/explore_feed");
const Search = require("./search");

const SearchResults = React.createClass({
  getInitialState() {
    return ({posts: []});
  },
  componentWillMount() {
    this.listener = PostStore.addListener(this.onChange);
    this.setState({posts: PostStore.searchResults()});
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  onChange() {
    this.setState({posts: PostStore.searchResults()});
  },

  render: function() {
    return (
      <div>
        <div id="dash-outer" className="group">
        <div id="dash-header">
          <div id="small-logo">
          <img onClick={this.logoClick} src="https://res.cloudinary.com/kattelles/image/upload/v1467405243/Stumblr-logo_2_ignktf.png"
            width="150" />
          </div>
          <Search/>
          <NavBar/>
        <ExploreFeed posts={this.state.posts}/>
      </div>
    </div>
  </div>
    );
  }

});

module.exports = SearchResults;
