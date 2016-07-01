const React = require('react');

const LinkForm = React.createClass({
  createSuccess(){
    this.props.close();
  },

  render: function() {
    return (
      <div>Link Form</div>
    );
  }

});

module.exports = LinkForm;
