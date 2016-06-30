const React = require("react");
const NavBar = require("./nav_bar");
const PostForm = require("./post_form");

const Dashboard = React.createClass({
  render() {
    return (
      <div className="dashboard">
        <div id="dash-header">
          <div id="small-logo">
          <img src="https://res.cloudinary.com/kattelles/image/upload/v1467158741/Stumblr.-logo_2_g9xsbd.png"
            width="150" />
          </div>
          <NavBar/>
        </div>
        <PostForm/>
      </div>);
  }
});

module.exports = Dashboard;
