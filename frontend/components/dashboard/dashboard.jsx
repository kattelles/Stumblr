const React = require("react");
const NavBar = require("./nav_bar");
const SideBar = require("./sidebar/side_bar");
const PostForm = require("./post_form");
const hashHistory = require("react-router").hashHistory;
const PostFeed = require("./post_feed");
const Search = require("./search");

const Dashboard = React.createClass({
  logoClick() {
    hashHistory.push("/");
  },
  render() {
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
        </div>
        <div className="dashboard">
          <div className="feed group">
            <PostForm/>
            <PostFeed/>
          </div>
            <SideBar/>
        </div>
      </div>
      </div>);
  }
});

module.exports = Dashboard;
