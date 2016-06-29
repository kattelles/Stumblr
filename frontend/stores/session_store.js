
const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');
const UserConstants = require("../constants/user_constants");

const SessionStore = new Store(AppDispatcher);

let _currentUser = {};
let _currentUserHasBeenFetched = false;

const _login = function(currentUser) {
  _currentUser = currentUser;
  _currentUserHasBeenFetched = true;
};

const _logout = function() {
  _currentUser = {};
  _currentUserHasBeenFetched = true;
};

const _updatedUser = function(user) {
  _currentUser = user;
  _currentUserHasBeenFetched = true;
};

SessionStore.currentUser = function() {
  return _currentUser;
};

SessionStore.__onDispatch = payload => {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
    	_logout();
      SessionStore.__emitChange();
      break;
    case UserConstants.USER_RECEIVED:
      _updatedUser(payload.user);
      SessionStore.__emitChange();
      break;
  }
};

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.currentUserHasBeenFetched = function () {
  return !!_currentUserHasBeenFetched;
};

SessionStore.isUserLoggedIn = function() {
  return !!_currentUser.id;
};

module.exports = SessionStore;
