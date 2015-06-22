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
    let propertyMenu = [
      {
        label: 'detail',
        routeName: 'property',
        params: this.getParams()
      },
      {
        label: 'map',
        routeName: 'propertyMap',
        params: this.getParams()
      },
      {
        label: 'contact',
        routeName: 'propertyContact',
        params: this.getParams()
      }
    ];

    MenuActions.menuChange(propertyMenu);
  },
  render: function () {
    return (
        <div className="PropertyPage">
          <p>Content for PropertyPage</p>
        </div>
      );
  }
});

module.exports = PropertyPage;
