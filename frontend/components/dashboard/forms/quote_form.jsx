const React = require('react');

const QuoteForm = React.createClass({
  createSuccess(){
    this.props.close();
  },
  
  render: function() {
    return (
      <div>Quote Form</div>
    );
  }

});

module.exports = QuoteForm;
