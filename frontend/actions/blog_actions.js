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

  getRecBlogs() {
    BlogApiUtil.getRecBlogs(this.receiveRecBlogs);
  },

  receiveBlog(blog) {
    Dispatcher.dispatch({
      actionType: BlogConstants.BLOG_RECEIVED,
      blog: blog
    });
  },

  receiveRecBlogs(blogs) {
    Dispatcher.dispatch({
      actionType: BlogConstants.RECS_RECEIVED,
      blogs: blogs
    });
  }
};

module.exports = BlogActions;
