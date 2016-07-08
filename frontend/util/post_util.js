module.exports = {
  createPost(data, cb) {
    $.ajax({
      url: "api/posts",
      method: "POST",
      data: data,
      success: (post) => {
        cb(post);
      }
    });
  },

  editPost(data, cb) {
    $.ajax({
      url: `api/posts/${data.post.id}`,
      method: "PATCH",
      data: data,
      success: (post) => {
        cb(post);
      }
    });
  },

  deletePost(id, cb) {
    $.ajax({
      url: `api/posts/${id}`,
      method: "DELETE",
      success: (post) => {
        cb(post);
      }
    });
  },

  fetchFeed(cb) {
    $.ajax({
      url: "api/posts",
      success: (posts) => {
        cb(posts);
      }
    });
  },

  getPosts(id, cb) {
    $.ajax({
      url: "api/posts",
      data: {user_id: id},
      success: (posts) => {
        cb(posts);
      }
    });
  },

  getExplorePosts(cb) {
    $.ajax({
      url: "api/posts",
      data: {explore: true},
      success: (posts) => {
        cb(posts);
      }
    });
  },

  getSearchResults(string, cb) {
    $.ajax({
      url: "api/posts",
      data: {search: string},
      success: (results) => {
        cb(results);
      }
    });
  }
};
