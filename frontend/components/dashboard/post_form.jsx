const React = require('react');
const SessionStore = require("../../stores/session_store");
const hashHistory = require("react-router").hashHistory;

const PostForm = React.createClass({
  getInitialState() {
    return({user: {} });
  },

  componentDidMount(){
    this.listener = SessionStore.addListener(this._onChange);
    this.setState({user: SessionStore.currentUser()});
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  _onChange() {
    this.setState({user: SessionStore.currentUser()});
  },

  avatarClick() {
    let cu = SessionStore.currentUser();
    let url = "blogs/" + cu.id;
    hashHistory.push(url);
  },

  render() {
    let avatar = this.state.user.avatar;
    return (
      <div className="feed-form">

        <img id="post-form-avatar" onClick={this.avatarClick} src={avatar}/>
      <div className="post-form">
      <div id="new-post-label-text">
        <img id="new-post-label-img" src="https://res.cloudinary.com/kattelles/image/upload/v1467240866/text_nyqjm3.png"/>

      </div>

      <div id="new-post-label-photo">
        <img id="new-post-label-img" src="https://res.cloudinary.com/kattelles/image/upload/v1467240873/camera_x4i8lc.png"/>

    </div>

      <div id="new-post-label-quote">
        <img id="new-post-label-img" src="https://res.cloudinary.com/kattelles/image/upload/v1467240870/quote_pvuc3i.png"/>

    </div>

      <div id="new-post-label-link">
        <img id="new-post-label-img" src="https://res.cloudinary.com/kattelles/image/upload/v1467240863/link_sgldrd.png"/>

    </div>

    </div>
    </div>
    );
  }

});

module.exports = PostForm;
