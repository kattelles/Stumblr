const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const BlogConstants = require("../constants/blog_constants");

const BlogStore = new Store(Dispatcher);

let _blog = {};

BlogStore.getBlog = function() {
  return _blog;
};

BlogStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BlogConstants.BLOG_RECEIVED:
      _blog = payload.blog;
      this.__emitChange();
      break;
  }
};

module.exports = BlogStore;
