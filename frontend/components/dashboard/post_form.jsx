const React = require('react');
const SessionStore = require("../../stores/session_store");

const PostForm = React.createClass({
  getInitialState() {
    return({user: {} });
  },

  componentDidMount(){
    this.listener = SessionStore.addListener(this._onChange);
    this.setState({user: SessionStore.currentUser()});
  },

  _onChange() {
    this.setState({user: SessionStore.currentUser()});
  },

  render() {
    let avatar = this.state.user.avatar;
    return (
      <div>
      <div className="post-form">
      <div id="new-post-label">
        <img src="http://res.cloudinary.com/kattelles/image/upload/v1467240866/text_nyqjm3.png"/>
        <p>Text</p>
      </div>

      <div id="new-post-label">
        <img src="http://res.cloudinary.com/kattelles/image/upload/v1467240873/camera_x4i8lc.png"/>
        <p>Image</p>
    </div>

      <div id="new-post-label">
        <img src="http://res.cloudinary.com/kattelles/image/upload/v1467240870/quote_pvuc3i.png"/>
        <p>Quote</p>
    </div>

      <div id="new-post-label">
        <img src="http://res.cloudinary.com/kattelles/image/upload/v1467240863/link_sgldrd.png"/>
        <p>Link</p>
    </div>

    </div>

    <img id="post-form-avatar" src={avatar}/>
    </div>
    );
  }

});

module.exports = PostForm;
