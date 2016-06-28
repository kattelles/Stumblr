const React = require("react");

const App = React.createClass({
  render() {
    return (<div> Stumblr coming soon! {this.props.children}</div>);
  }
});


module.exports = App;
