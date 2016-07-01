const React = require('react');

const ImageForm = React.createClass({
  createSuccess(){
    this.props.close();
  },
  
  render: function() {
    return (
      <div>Image Form</div>
    );
  }

});

module.exports = ImageForm;
