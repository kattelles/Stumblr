const UserApiUtil = require("../util/user_util");
const Dispatcher = require("../dispatcher/dispatcher");
const UserConstants = require("../constants/user_constants");

module.exports = {
  updateUser(user, callback) {
    UserApiUtil.updateUser(user, this.receiveUser, callback);
  },

  receiveUser (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  }
};
