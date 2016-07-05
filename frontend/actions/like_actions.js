const LikeApiUtil = require("../util/like_util");
const LikeConstants = require("../constants/like_constants");
const Dispatcher = require("../dispatcher/dispatcher");

module.exports = {
  like(data) {
    LikeApiUtil.like(data, this.receiveLike);
  },

  unlike(likeId) {
    LikeApiUtil.unlike(likeId, this.removeLike);
  },

  fetchLikes(postId) {
    LikeApiUtil.fetchLikes(postId, this.receiveLikes);
  },

  receiveLike(like) {
    Dispatcher.dispatch({
      actionType: LikeConstants.RECEIVE_LIKE,
      like: like
    });
  },

  removeLike(like) {
    Dispatcher.dispatch({
      actionType: LikeConstants.REMOVE_LIKE,
      like: like
    });
  }
};
