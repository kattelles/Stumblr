const Dispatcher = require("../dispatcher/dispatcher");
const Store = require('flux/utils').Store;
const PostConstants = require("../constants/post_constants");
const LikeConstants = require("../constants/like_constants");

const PostStore = new Store(Dispatcher);

let _posts = {};

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

  keys.forEach(key => {
    posts.push(_posts[key]);
  });

  return posts;
};

const addLike = function(like) {
  // debugger
  _posts[like.post_id].likes.push(like);
};

const removeLike = function(like) {

  let idx;

    _posts[like.post_id].likes.forEach((_like, index) => {
      if (like.id === _like.id) {
        idx = index;
      }
    });

  _posts[like.post_id].likes.splice(idx, 1);
};

PostStore.getPost = function(id) {
  return _posts[id];
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
  }
};

module.exports = PostStore;
