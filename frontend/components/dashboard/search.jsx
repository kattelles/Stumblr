const React = require('react');


const Search = React.createClass({

  render: function() {
    return (
      <div className="search">
        <input placeholder="Search #tags"/>
      </div>
    );
  }

});

module.exports = Search;
