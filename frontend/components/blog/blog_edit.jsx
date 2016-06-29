const React = require("react");
const BlogStore = require("../../stores/blog_store");
const BlogActions = require("../../actions/blog_actions");

const BlogEdit = React.createClass({
  getInitialState() {
    return({blog: {}});
  },

  componentDidMount() {
    BlogStore.addListener(this._onChange);
    BlogActions.getBlog(this.props.params.userId);
  },

  _onChange() {
    this.setState({blog: BlogStore.getBlog()});
  },

  render() {
    return(<div>
      <form onSubmit={this.handleSubmit}>
        <h2>Blog Settings</h2>

        <input type="submit" value="Save Changes"/>
      </form>
    </div>);

  }
});

module.exports = BlogEdit;
