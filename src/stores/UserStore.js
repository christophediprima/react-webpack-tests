'use strict';

var Reflux = require('reflux');
var Actions = require('actions/UserActionCreators');
var Constants = require('constants/UserConstants');

var User = {
  role: Constants.ROLES.VISITOR
};

var UserStore = Reflux.createStore({
  listenables: Actions,
  getInitialState: function(){
    return {
      User: User
    };
  },
  onUserLogin : function(credentials){

    User = {
      email: credentials.email,
      role: Constants.ROLES.CONSUMER
    };
    this.trigger({User});
  },
  onUserLogout : function(){
    User = {
      role: Constants.ROLES.VISITOR
    };
    this.trigger({User});
  }
});

module.exports = UserStore;
