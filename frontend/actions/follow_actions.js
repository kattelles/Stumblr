const FollowApiUtil = require("../util/follow_util");
const Dispatcher = require("../dispatcher/dispatcher");
const FollowConstants = require("../constants/follow_constants");

const FollowActions = {
    follow(data) {
      FollowApiUtil.follow(data, this.receiveFollow);
    },

    unfollow(id) {
      FollowApiUtil.unfollow(id, this.removeFollow);
    },

    receiveFollow(follow) {
      Dispatcher.dispatch({
        actionType: FollowConstants.FOLLOW_RECEIVED,
        follow: follow
      });
    },

    removeFollow(follow) {
      Dispatcher.dispatch({
        actionType: FollowConstants.FOLLOW_REMOVED,
        follow: follow
      });
    }
};


module.exports = FollowActions;
