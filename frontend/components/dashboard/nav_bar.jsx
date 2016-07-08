const React = require("react");
const hashHistory = require('react-router').hashHistory;
const SessionActions = require("../../actions/session_actions");
const SessionStore = require("../../stores/session_store");
const Modal = require("react-modal");
const UserEdit = require("./user_edit");


const NavBar = React.createClass({
  getInitialState() {
    return({currentUser: SessionStore.currentUser(), modalOpen: false});
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
    // let url = `settings/${this.state.currentUser.id}`;
    // hashHistory.push(url);
    this.setState({modalOpen: true});
  },

  onModalClose() {
    this.setState({modalOpen: false});
  },

  goToDashboard() {
    hashHistory.push("/");
  },

  goToExplore() {
    hashHistory.push("explore");
  },

  render() {
    return (

      <div className="navbar">


        <div className="tooltip" onClick={this.goToMyBlog}>
            <span className="tooltiptext">My blog</span>
            <img src="https://res.cloudinary.com/kattelles/image/upload/v1467592691/contacts-32_1_hhqmqc.png" />
        </div>

        <div className="tooltip" onClick={this.goToExplore}>
          <span className="tooltiptext">Explore</span>
        <img id="eye-icon" src="https://res.cloudinary.com/kattelles/image/upload/v1467831168/eye-3-48_wozsqr.png"/>
        </div>

        <div className="tooltip" onClick={this.goToSettings}>
          <span className="tooltiptext">Settings</span>
          <img src="https://res.cloudinary.com/kattelles/image/upload/v1467592809/settings-4-32_1_uj3ayg.png" />
        </div>


        <div className="tooltip" onClick={this.goToDashboard}>
          <span className="tooltiptext">My Dashboard</span>
          <img src="https://res.cloudinary.com/kattelles/image/upload/v1467592469/house-32_2_lfyr7s.png"/>
        </div>

        <div className="tooltip" onClick={this.logOut}>
          <span className="tooltiptext">Log out</span>
          <img src="https://res.cloudinary.com/kattelles/image/upload/v1467592872/logout-32_1_yixxsh.png" />
        </div>

        <Modal
          className="user-edit-modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          onAfterOpen={this.onModalOpen}>
          <UserEdit close={this.onModalClose}/>
        </Modal>
      </div>

    );
  }
});


module.exports = NavBar;
