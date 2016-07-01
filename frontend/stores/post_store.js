const Dispatcher = require("../dispatcher/dispatcher");
const Store = require('flux/utils').Store;
const PostConstants = require("../constants/post_constants");

const PostStore = new Store(Dispatcher);

let _posts = {};

const addPost = function(post) {
  _posts[post.id] = post;
};

const removePost = function(post) {
  delete _posts[post.id];
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
  }
};

module.exports = PostStore;
