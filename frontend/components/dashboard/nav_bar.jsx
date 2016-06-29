const React = require("react");
const hashHistory = require('react-router').hashHistory;
const SessionActions = require("../../actions/session_actions");
const SessionStore = require("../../stores/session_store");

const NavBar = React.createClass({
  getInitialState() {
    return({currentUser: SessionStore.currentUser()});
  },

  componentDidMount() {
    this.listener = SessionStore.addListener(this.onChange);
    this.setState({currentUser: SessionStore.currentUser()});
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  onChange() {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  logOut(){
    SessionActions.logOut();
    hashHistory.push("/");
  },

  goToMyBlog() {
    let url = `/blogs/${this.state.currentUser.id}`;
    hashHistory.push(url);
  },

  goToSettings() {
    let url = `settings/${this.state.currentUser.id}`;
    hashHistory.push(url);
  },


  render() {
    return (
      <div className="navbar">
        <button onClick={this.goToMyBlog}>My Blog</button>
        <button onClick={this.logOut}>Logout</button>
        <button onClick={this.goToSettings}>Settings</button>
      </div>
    );
  }
});


module.exports = NavBar;
