const React = require("react");
const SessionActions = require("../actions/session_actions");
const BlogActions = require("../actions/blog_actions");

const App = React.createClass({
  componentDidMount() {
    SessionActions.fetchCurrentUser( (user) => {
      BlogActions.getBlog(user.id);
    } );

  },

  render() {
    return (<div className='app'>{this.props.children}</div>);
  }
});


module.exports = App;
