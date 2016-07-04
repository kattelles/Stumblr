const PostApiUtil = require("../util/post_util");
const Dispatcher = require("../dispatcher/dispatcher");
const PostConstants = require("../constants/post_constants");

module.exports = {
  createPost(data) {
    PostApiUtil.createPost(data, this.receivePost);
  },

  editPost(data) {
    PostApiUtil.editPost(data, this.receivePost);
  },

  deletePost(id) {
    PostApiUtil.editPost(id, this.removePost);
  },

  fetchFeed() {
    PostApiUtil.fetchFeed( this.receivePost);
  },

  receiveFeed(posts) {
    Dispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  receivePost(post) {
    Dispatcher.dispatch({
      actionType: PostConstants.POST_RECEIVED,
      post: post
    });
  },

  removePost(post) {
    Dispatcher.dispatch({
      actionType: PostConstants.POST_REMOVED,
      post: post
    });
  }
};
