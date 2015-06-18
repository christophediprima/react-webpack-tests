'use strict';

var AppApp = require('./AppApp');

var HomePage = require('./HomePage');
var PropertyListPage = require('./PropertyListPage');
var PropertyPage = require('./PropertyPage');

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var content = document.getElementById('content');

var Routes = (
  <Route handler={AppApp}>
    <Route path="property" name="propertyList" handler={PropertyListPage} addHandlerKey={true}/>
    <Route path="property/:propertyId" name="property" handler={PropertyPage} addHandlerKey={true}/>
    <DefaultRoute name="home" handler={HomePage} addHandlerKey={true}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
