const BlogApiUtil = require("../util/blog_util");
const Dispatcher = require("../dispatcher/dispatcher");
const BlogConstants = require("../constants/blog_constants");

const BlogActions = {
  getBlog(id) {
    BlogApiUtil.getBlog(id, this.receiveBlog);
  },

  updateBlog(data, cb) {
    BlogApiUtil.updateBlog(data, this.receiveBlog, cb);
  },

  receiveBlog(blog) {
    Dispatcher.dispatch({
      actionType: BlogConstants.BLOG_RECEIVED,
      blog: blog
    });
  }
};

module.exports = BlogActions;
