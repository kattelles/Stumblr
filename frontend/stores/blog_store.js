const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const BlogConstants = require("../constants/blog_constants");
const FollowConstants = require("../constants/follow_constants");

const BlogStore = new Store(Dispatcher);

let _blog = {};

BlogStore.getBlog = function() {
  return _blog;
};

const removeFollow = function(oldFollow) {
  for (let i = 0; i < _blog.follows.length; i++) {
    if (_blog.follows[i].id === oldFollow.id) {
      _blog.follows.splice(i, 1);
    }
  }
};

BlogStore.isFollowing = function(userId) {
  for (let i = 0; i < _blog.follows.length; i++) {
    if (_blog.follows[i].user_id === userId) {
      return true;
    }
  }

  return false;
};

BlogStore.getFollow = function(userId) {
  for (let i = 0; i < _blog.follows.length; i++) {
    if (_blog.follows[i].user_id === userId) {
      return _blog.follows[i];
    }
  }
};

BlogStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BlogConstants.BLOG_RECEIVED:
      _blog = payload.blog;
      this.__emitChange();
      break;
    case FollowConstants.FOLLOW_RECEIVED:
      _blog.follows.push(payload.follow);
      this.__emitChange();
      break;
    case FollowConstants.FOLLOW_REMOVED:
      removeFollow(payload.follow);
      this.__emitChange();
      break;
  }
};

module.exports = BlogStore;
