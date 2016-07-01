const React = require('react');

const TextForm = React.createClass({

  createSuccess(){
    this.props.close();
  },

  render: function() {

    return (
      <div>Text Form</div>
    );
  }

});

module.exports = TextForm;
