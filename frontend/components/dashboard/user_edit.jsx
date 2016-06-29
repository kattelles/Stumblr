const React = require("react");
const SessionStore = require("../../stores/session_store");
const UserActions = require("../../actions/user_actions");
const hashHistory = require("react-router").hashHistory;

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
    hashHistory.push("/");
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
    return(<div>
    <h1>Account</h1>

      <form onSubmit={this.handleSubmit}>
        <label>Username: </label>
        <input onChange={this.usernameChange} value={this.state.username}/>
        <br/>
        <br/>
        <label>Avatar: </label>
        <br/>
        <img className="avatar" src={this.state.avatar}/>
        <br/>
        <button onClick={this.avatarChange}>Upload Image</button>
        <br/>
        <br/>
        <input type="submit" value="Save"/>
      </form>
      <br/>
      <button onClick={this.backToDashboard}>Back to Dashboard</button>
    </div>);

  }
});

module.exports = UserEdit;
