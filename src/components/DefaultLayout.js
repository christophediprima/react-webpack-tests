'use strict';

var Menu = require('./Menu');
var UserMenu = require('./UserMenu');

var React = require('react/addons');

var MenuActions = require('actions/MenuActionCreators');

var imageURL = require('../images/logo_210X50.png');

var defaultMenu = [
  {
    label: 'Home',
    routeName: 'home'
  },
  {
    label: 'Property list',
    routeName: 'propertyList'
  },
  {
    label: 'Property',
    routeName: 'property',
    params: {
      propertyId: 1
    }
  }
];

require('styles/DefaultLayout.sass');

var DefaultLayout = React.createClass({
  componentWillMount: function(){

    MenuActions.menuChange(defaultMenu);
  },
  render: function () {
    return (
      <div className='default layout main'>
        <img src={imageURL} />
        <Menu />
        <UserMenu />
        {this.props.children}
      </div>
      );
  }
});

module.exports = DefaultLayout;
