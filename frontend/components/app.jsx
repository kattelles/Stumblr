const React = require("react");

const App = React.createClass({
  render() {
    return (<div className='app'>{this.props.children}</div>);
  }
});


module.exports = App;
