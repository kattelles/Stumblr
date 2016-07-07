const React = require('react');
const NavBar = require("../dashboard/nav_bar");
const PostStore = require("../../stores/post_store");
const PostActions = require("../../actions/post_actions");
const ExploreFeed = require("./explore_feed");

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
    this.setState({posts: PostStore.allPosts()});
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
          <ExploreFeed posts={this.state.posts}/>
        </div>
      </div>
    </div>
    );
  }

});

module.exports = Explore ;
