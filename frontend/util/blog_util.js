const BlogApiUtil = {
  getBlog(userId, cb) {
    $.ajax({
      url: `api/users/${userId}/blog`,
      success: (blog) => {
        cb(blog);
      }
    });
  },

  updateBlog(data, cb) {
    $.ajax({
      url: `api/users/${data.user_id}/blog`,
      method: "PATCH",
      data: {blog: {
        title: data.title,
        id: data.id,
        description: data.description}},
      success: (blog) => {
        cb(blog);
      }
    });
  }
};

module.exports = BlogApiUtil;
