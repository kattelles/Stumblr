const React = require("react");
const SessionStore = require("../../stores/session_store");
const UserActions = require("../../actions/user_actions");

const UserEdit = React.createClass({
  getInitialState() {
    let user = SessionStore.currentUser();
    let avatar = user.avatar ? user.avatar : "";
    return({username: user.username, avatar: avatar});
  },

  componentDidMount() {
    this.listener = SessionStore.addListener(this.onChange);
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  onChange() {
    let user = SessionStore.currentUser();
    let avatar = user.avatar ? user.avatar : "";
    this.setState({username: user.username, avatar: avatar});
  },

  usernameChange(e) {
    this.setState({username: e.target.value});
  },

  avatarChange(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        this.setState({avatar: results[0].url});
      }
    }.bind(this));
  },

  backToDashboard() {
    // debugger
    this.props.close();
  },

  handleSubmit(e) {
    e.preventDefault();
    UserActions.updateUser({user: {
      id: SessionStore.currentUser().id,
      username: this.state.username,
      avatar: this.state.avatar}
    }, this.backToDashboard);

  },

  render() {
    return(
      <div>

        <h1 id="user-edit-header">Account</h1>

        <div id="user-edit-input">
        <div>Username: </div>
        <input onChange={this.usernameChange} value={this.state.username}/>

        <br/>

        <div>Avatar:</div>
        <img className="user-edit-avatar" src={this.state.avatar}/>
        <div id="upload-image" onClick={this.avatarChange}>
          <div id="upload-text">Upload Image</div></div>

        </div>

        <div id="footer">
          <div id="close-button" onClick={this.props.close}>Close</div>
          <div id="post-button" onClick={this.handleSubmit}>Save</div>
        <div/>
        </div>
    </div>);

  }
});

module.exports = UserEdit;
