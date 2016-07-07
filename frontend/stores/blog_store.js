const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const BlogConstants = require("../constants/blog_constants");
const FollowConstants = require("../constants/follow_constants");

const BlogStore = new Store(Dispatcher);

let _blog = {};
let _recs = {};

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

BlogStore.following = function(userId, blog) {
  for (let i = 0; i < blog.follows.length; i++) {
    if (blog.follows[i].user_id === userId) {
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


const resetRecs = function(blogs) {
  _recs = blogs;
};

BlogStore.recs = function() {
  return _recs;
};

const addFollowRecs = function(follow) {
  let keys = Object.keys(_recs);

  keys.forEach(key =>{
    if (_recs[key].id === follow.blog_id) {
      _recs[key].follows.push(follow);
    }
  });
};

const removeFollowRecs = function(follow) {
  let keys = Object.keys(_recs);

  keys.forEach(key =>{
    if (_recs[key].id === follow.blog_id) {
      let id = _recs[key].follows.indexOf(follow);
      _recs[key].follows.splice(id, 1);
    }
  });
};

BlogStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BlogConstants.BLOG_RECEIVED:
      _blog = payload.blog;
      this.__emitChange();
      break;
    case FollowConstants.FOLLOW_RECEIVED:
      _blog.follows.push(payload.follow);
      addFollowRecs(payload.follow);
      this.__emitChange();
      break;
    case FollowConstants.FOLLOW_REMOVED:
      removeFollow(payload.follow);
      removeFollowRecs(payload.follow);
      this.__emitChange();
      break;
    case BlogConstants.RECS_RECEIVED:
      resetRecs(payload.blogs);
      this.__emitChange();
      break;
  }
};

module.exports = BlogStore;
