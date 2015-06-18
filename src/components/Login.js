'use strict';

var React = require('react/addons');
var Reflux = require('reflux');

var Actions = require('actions/UserActionCreators');
var UserStore = require('stores/UserStore');
var UserConstants = require('constants/UserConstants');

require('styles/Login.sass');

var Login = React.createClass({
  mixins:[Reflux.connect(UserStore)],
  login: function(e){
    e.preventDefault();
    Actions.userLogin({
      email: e.target.email.value,
      password: e.target.password.value
    });
  },
  logout: function(){
    Actions.userLogout();
  },
  render: function () {
    var user = this.state.User;

    if(user.role !== UserConstants.ROLES.VISITOR){
      return (
        <a onClick={this.logout}>Logout</a>
      );
    }else{
      return (
        <div>
          <a>Login</a>
          <form onSubmit={this.login}>
            <div><input type="email" name="email" placeholder="email" required="required" /></div>
            <div><input type="password" name="password" placeholder="password" required="required" /></div>
            <div><input type="submit" value="Connect" /></div>
          </form>
        </div>
      );
    }

  }
});

module.exports = Login;
