'use strict';

var Reflux = require('reflux');
var Actions = require('actions/LayoutActionCreators');

var Constants = require('constants/LayoutConstants');

var layouts = {
  DefaultLayout: require('components/DefaultLayout'),
  DeadEndLayout: require('components/DeadEndLayout')
};


var LayoutStore = Reflux.createStore({
  listenables: Actions,
  getInitialState: function(){
    return {
      layoutConfig: Constants,
      layouts: layouts
    };
  }

});

module.exports = LayoutStore;
