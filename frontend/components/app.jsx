const React = require("react");
const SessionActions = require("../actions/session_actions");
const BlogActions = require("../actions/blog_actions");
const SessionStore = require("../stores/session_store");
const BlogStore = require("../stores/blog_store");

const App = React.createClass({
  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._sessionChange);
    SessionActions.fetchCurrentUser();
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _sessionChange(){
    if (SessionStore.currentUser().id) {
      BlogActions.getBlog(SessionStore.currentUser().id);
    }
  },

  render() {
    return (<div className='app'>{this.props.children}</div>);
  }
});


module.exports = App;
