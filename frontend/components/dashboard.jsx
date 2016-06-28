const React = require("react");
const SessionActions = require("../actions/session_actions");
const hashHistory = require('react-router').hashHistory;

const Dashboard = React.createClass({
  handleClick(){
    SessionActions.logOut();
    hashHistory.push("/");
  },

  render() {
    return (
      <div className="dashboard">
        Welcome to the Dashboard!
        <button onClick={this.handleClick}>Logout</button>
      </div>);
  }
});

module.exports = Dashboard;
