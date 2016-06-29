const BlogApiUtil = require("../util/blog_util");
const Dispatcher = require("../dispatcher/dispatcher");
const BlogConstants = require("../constants/blog_constants");

const BlogActions = {
  getBlog(id) {
    BlogApiUtil.getBlog(id, this.receiveBlog);
  },

  updateBlog(data) {
    BlogApiUtil.updateBlog(data, this.receiveBlog);
  },

  receiveBlog(blog) {
    Dispatcher.dispatch({
      actionType: BlogConstants.BLOG_RECEIVED,
      blog: blog
    });
  }
};

module.exports = BlogActions;
