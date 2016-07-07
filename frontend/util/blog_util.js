const BlogApiUtil = {
  getBlog(userId, cb) {
    $.ajax({
      url: `api/users/${userId}/blog`,
      success: (blog) => {
        cb(blog);
      }
    });
  },

  updateBlog(data, cb, cb2) {
    $.ajax({
      url: `api/users/${data.user_id}/blog`,
      method: "PATCH",
      data: {blog: {
        id: data.id,
        title: data.title,
        description: data.description,
        cover_photo: data.cover_photo}},
      success: (blog) => {
        cb(blog);
        cb2();
      }
    });
  },

  getRecBlogs(cb) {
    $.ajax({
      url: "api/blogs",
      success: (blogs) => {
        cb(blogs);
      }
    });
  }
};

module.exports = BlogApiUtil;
