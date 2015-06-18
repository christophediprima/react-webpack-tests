'use strict';

var Reflux = require('reflux');

var UserActionCreators  =  Reflux.createActions([
  "userChange",
  "userLogin",
  "userLogout"
]);


module.exports = UserActionCreators;
