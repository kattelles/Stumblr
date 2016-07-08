const Dispatcher = require("../dispatcher/dispatcher");
const Store = require('flux/utils').Store;
const PostConstants = require("../constants/post_constants");
const LikeConstants = require("../constants/like_constants");

const PostStore = new Store(Dispatcher);

let _posts = {};
let _searchResults = [];

const addPost = function(post) {
  _posts[post.id] = post;
};

const removePost = function(post) {
  delete _posts[post.id];
};

const resetPosts = function(posts) {
  _posts = {};
  posts.forEach(post => {
    _posts[post.id] = post;
  });
};

PostStore.allPosts = function() {
  let posts = [];
  let keys = Object.keys(_posts);

  keys = keys.map(key => {
    return (parseInt(key));
  });

  keys = keys.sort((x, y) => {
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });

  keys.forEach(key => {
    posts.push(_posts[key]);
  });

  return posts.reverse();
};

const addLike = function(like) {
  if (_posts[like.post_id]) {
    _posts[like.post_id].likes.push(like);
  }

  _searchResults.forEach(post => {
    if (like.post_id === post.id) {
      post.likes.push(like);
    }
  });
};

const removeLike = function(like) {
  if (_posts[like.post_id]) {
    let idx;
      _posts[like.post_id].likes.forEach((_like, index) => {
        if (like.id === _like.id) {
          idx = index;
        }
      });
    _posts[like.post_id].likes.splice(idx, 1);
  }

  _searchResults.forEach((post, index) => {
    if (like.post_id === post.id) {
      let likeIdx = _searchResults[index].likes.indexOf(like);
      _searchResults[index].likes.splice(likeIdx, 1);
    }
  });
};

PostStore.getPost = function(id) {
  return _posts[id];
};

PostStore.searchResults = function() {
  return _searchResults;
};

PostStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PostConstants.POST_RECEIVED:
      addPost(payload.post);
      this.__emitChange();
      break;
    case PostConstants.POST_REMOVED:
      removePost(payload.post);
      this.__emitChange();
      break;
    case PostConstants.POSTS_RECEIVED:
      resetPosts(payload.posts);
      this.__emitChange();
      break;
    case LikeConstants.RECEIVE_LIKE:
      addLike(payload.like);
      this.__emitChange();
      break;
    case LikeConstants.REMOVE_LIKE:
      removeLike(payload.like);
      this.__emitChange();
      break;
    case PostConstants.SEARCH_RESULTS_RECEIVED:
      _searchResults = payload.results;
      this.__emitChange();
      break;
  }
};

module.exports = PostStore;
