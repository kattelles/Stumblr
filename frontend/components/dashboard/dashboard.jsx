const React = require("react");
const NavBar = require("./nav_bar");
const SideBar = require("./side_bar");
const PostForm = require("./post_form");
const hashHistory = require("react-router").hashHistory;

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
          <NavBar/>
        </div>
        <div className="dashboard">
          <div className="feed">
            <PostForm/>
          </div>
            <SideBar/>
        </div>
      </div>
      </div>);
  }
});

module.exports = Dashboard;
