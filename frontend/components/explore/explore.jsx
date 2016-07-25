const React = require('react');
const NavBar = require("../dashboard/nav_bar");
const PostStore = require("../../stores/post_store");
const PostActions = require("../../actions/post_actions");
const ExploreFeed = require("./explore_feed");
const Search = require("../dashboard/search/search");

const shuffle = function(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
};


const Explore  = React.createClass({

  getInitialstate() {
    return ({posts: []});
  },

  componentDidMount() {
    this.listener = PostStore.addListener(this.postsChange);
    PostActions.getExplorePosts();
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  postsChange() {
    this.setState({posts: shuffle(PostStore.allPosts())});
  },

  render: function() {
    if (!this.state) {
      return (<div className="loader">Loading...</div>);
    }
    return (
      <div>
        <div id="dash-outer" className="group">
        <div id="dash-header">
          <div id="small-logo">
          <img onClick={this.logoClick} src="https://res.cloudinary.com/kattelles/image/upload/v1467405243/Stumblr-logo_2_ignktf.png"
            width="150" />
          </div>
          <NavBar/>
          <Search/>
          <ExploreFeed posts={this.state.posts}/>
        </div>
      </div>
    </div>
    );
  }

});

module.exports = Explore ;
