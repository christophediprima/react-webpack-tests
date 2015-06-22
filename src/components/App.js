'use strict';

var React = require('react/addons');
var Reflux = require('Reflux');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;



var LayoutStore = require('stores/LayoutStore');

// CSS
require('normalize.css');
require('../styles/main.css');

var App = React.createClass({
  mixins: [
    Router.State,
    Reflux.connect(LayoutStore)
  ],
  render: function() {
    let routeName = this.getRoutes().reverse()[0].name,
        currentLayoutConfig = this.state.layoutConfig[routeName] || this.state.layoutConfig['default'],
        CurrentLayoutComponent = this.state.layouts[currentLayoutConfig.name];


    return (
      <ReactCSSTransitionGroup component="div" transitionName={currentLayoutConfig.layoutTransitionName}>
        <CurrentLayoutComponent key={currentLayoutConfig.name}>
          <div className="page">
            <ReactCSSTransitionGroup component="div" transitionName={currentLayoutConfig.pageTransitionName} >
              <RouteHandler key={routeName}/>
            </ReactCSSTransitionGroup>
          </div>
        </CurrentLayoutComponent>
      </ReactCSSTransitionGroup>
    );
  }
});

module.exports = App;
