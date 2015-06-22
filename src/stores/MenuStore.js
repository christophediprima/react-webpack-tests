'use strict';

var Reflux = require('reflux');
var Actions = require('actions/MenuActionCreators');

var Menu = [];

var MenuStore = Reflux.createStore({
  listenables: Actions,
  getInitialState: function(){
    return {
      Menu: Menu
    };
  },
  onMenuChange: function(m) {
    Menu = m;
    this.trigger({Menu});
  }
});

module.exports = MenuStore;
