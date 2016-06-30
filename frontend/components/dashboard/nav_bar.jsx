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

        <div onClick={this.goToMyBlog}>
            <img src="https://res.cloudinary.com/kattelles/image/upload/v1467321692/user_istndw.png" />
        </div>

        <div onClick={this.goToSettings}>
          <img src="https://res.cloudinary.com/kattelles/image/upload/v1467321639/settings-4-32_mb8oty.png" />
        </div>

        <div onClick={this.logOut}>
          <img src="https://res.cloudinary.com/kattelles/image/upload/v1467321963/logout-32_k9us73.png" />
        </div>
      </div>
    );
  }
});


module.exports = NavBar;
