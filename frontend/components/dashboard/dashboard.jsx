const React = require("react");
const NavBar = require("./nav_bar");
const SideBar = require("./side_bar");
const PostForm = require("./post_form");

const Dashboard = React.createClass({
  render() {
    return (
      <div>
        <div id="dash-header">
          <div id="small-logo">
          <img src="https://res.cloudinary.com/kattelles/image/upload/v1467393972/Stumblr-logo_1_v8yl01.png"
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
      </div>);
  }
});

module.exports = Dashboard;
