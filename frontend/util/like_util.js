module.exports = {
  like(data, cb) {
    $.ajax({
      url: "api/likes",
      method: "POST",
      data: data,
      success: (like) => {
        cb(like);
      }
    });
  },

  unlike(likeId, cb) {
    $.ajax({
      url: `api/likes/${likeId}`,
      method: "DELETE",
      success: (like) => {
        cb(like);
      }
    });
  }
};
