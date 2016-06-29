const React = require("react");
const NavBar = require("./nav_bar");

const Dashboard = React.createClass({
  render() {
    return (
      <div className="dashboard">
        <div id="small-logo">
        <img src="http://res.cloudinary.com/kattelles/image/upload/v1467158741/Stumblr.-logo_2_g9xsbd.png"
          width="150" />
        </div>
        <NavBar/>
      </div>);
  }
});

module.exports = Dashboard;
