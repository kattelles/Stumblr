
const FollowApiUtil = {
  follow(data, cb) {
    $.ajax({
      url: "api/follows",
      method: "POST",
      data: data,
      success: (follow) => {
        cb(follow);
      }
    });
  },

  unfollow(id, cb) {
    $.ajax({
      url: `api/follows/${id}`,
      method: "DELETE",
      success: (follow) => {
        cb(follow);
      }
    });
  }
};

module.exports = FollowApiUtil;
