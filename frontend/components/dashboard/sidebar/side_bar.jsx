var React = require('react');
const RecBlogs = require("./recommended_blogs");
const Radar = require("./radar");

const SideBar = React.createClass({
  render: function() {
    return (
      <div>
        <RecBlogs/>
        <Radar/>
      </div>
    );
  }

});

module.exports = SideBar;
