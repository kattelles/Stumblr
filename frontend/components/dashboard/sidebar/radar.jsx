const React = require('react');
const hashHistory =require("react-router").hashHistory;

const Radar = React.createClass({
  click() {
    let url = "blogs/3";
    hashHistory.push(url);
  },

  render: function() {
    return (
      <div className="radar">
        <div className="radar-title">Radar</div>

        <div className="radar-post">
          <div onClick={this.click} className="radar-header">nature_lover</div>
          <img src="http://res.cloudinary.com/kattelles/image/upload/v1467923011/photo-1429552097216-d1944f46d443_2_cksvx3.jpg"/>
          <div className="radar-footer"></div>
      </div>
      </div>
    );
  }

});

module.exports = Radar;
