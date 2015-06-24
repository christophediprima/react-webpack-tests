'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Reflux = require('Reflux');

var MenuStore = require('stores/MenuStore');
var MenuActions = require('actions/MenuActionCreators');

require('styles/PropertyPage.sass');

var PropertyPage = React.createClass({
  mixins: [
    Router.State,
    Reflux.connect(MenuStore)
  ],
  componentWillMount: function(){
    let params = this.getParams(),
        propertyMenu = [
      {
        label: 'Detail',
        routeName: 'property',
        params: params
      },
      {
        label: 'Map',
        routeName: 'propertyMap',
        params: params
      },
      {
        label: 'Contact',
        routeName: 'propertyContact',
        params: params
      }
    ];

    MenuActions.menuChange(propertyMenu);
  },
  render: function () {
    let routeName = this.getRoutes().reverse()[0].name;

    return (
        <div className="PropertyPage">
          <p>Content for PropertyPage {routeName}</p>
        </div>
      );
  }
});

module.exports = PropertyPage;
