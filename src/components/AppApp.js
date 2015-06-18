'use strict';

var MainMenu = require('./MainMenu');
var UserMenu = require('./UserMenu');

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var AppApp = React.createClass({
  mixins: [ Router.State ],
  render: function() {
    var routeName = this.getRoutes().reverse()[0].name;

    return (
      <div className='main'>
        <MainMenu />
        <UserMenu />
        <ReactTransitionGroup transitionName="fade" >
          <img src={imageURL} />
          <RouteHandler className="page" key={routeName}/>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = AppApp;
