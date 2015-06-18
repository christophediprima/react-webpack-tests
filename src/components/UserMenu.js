'use strict';

var React = require('react/addons');
var Reflux = require('reflux');

var Actions = require('actions/UserActionCreators');
var UserStore = require('stores/UserStore');
var UserConstants = require('constants/UserConstants');

var Login = require('./Login');


require('styles/UserMenu.sass');

var UserMenu = React.createClass({
  mixins:[Reflux.connect(UserStore)],
  render: function () {
    var user = this.state.User;

    return (
        <ul className="UserMenu">
          <li>Logged as : {user.email || '-'} ({user.role})</li>
          <li><Login /></li>
        </ul>
      );
  }
});

module.exports = UserMenu;
