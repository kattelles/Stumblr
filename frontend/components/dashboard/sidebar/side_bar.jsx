var React = require('react');
const RecBlogs = require("./recommended_blogs");
const Radar = require("./radar");
const TrendingTags = require("./trending_tags");

const SideBar = React.createClass({
  render: function() {
    return (
      <div>
        <RecBlogs/>
        <TrendingTags/>
        <Radar/>
      </div>
    );
  }

});

module.exports = SideBar;
