const React = require('react');
const hashHistory = require("react-router").hashHistory;
const PostActions = require("../../../actions/post_actions");

const PopularTags = React.createClass({

  click(tag) {
    PostActions.getSearchResults(tag);
    hashHistory.push("search");
  },

  render: function() {
    let _tags = ["nature", "sports", "tech", "cats", "SF", "quotes", "music",
    "art", "coding", "funny", "dogs", "news", "silly", "animals", "happy"];
    
    let tags = _tags.map(tag => {
      return (
        <div key={tag} onClick={this.click.bind(this, tag)}
          className="trending-tag">
          #{tag}
        </div>
      );
    });

    return (
      <div className="trending">
        <div className="trending-title">Trending Tags</div>
        <div className="trending-tags"> {tags}</div>
      </div>
    );
  }

});

module.exports = PopularTags;
