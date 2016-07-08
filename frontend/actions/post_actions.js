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

  deletePost(id){
    PostApiUtil.deletePost(id, this.removePost);
  },

  fetchFeed() {
    PostApiUtil.fetchFeed(this.receiveFeed);
  },

  getBlogPosts(id) {
    PostApiUtil.getPosts(id, this.receiveFeed);
  },

  getExplorePosts() {
    PostApiUtil.getExplorePosts(this.receiveFeed);
  },

  getSearchResults(queryString) {
    PostApiUtil.getSearchResults(queryString, this.receiveSearchResults);
  },

  receiveSearchResults(results) {
    Dispatcher.dispatch({
      actionType: PostConstants.SEARCH_RESULTS_RECEIVED,
      results: results
    });
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
