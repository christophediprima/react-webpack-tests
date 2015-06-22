'use strict';

var Menu = require('./Menu');
var UserMenu = require('./UserMenu');

var React = require('react/addons');

var MenuActions = require('actions/MenuActionCreators');

var imageURL = require('../images/yeoman.png');

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
        <div className="cleafix">
          <img src={imageURL} />
          <Menu />
          <UserMenu />
        </div>
        {this.props.children}
      </div>
      );
  }
});

module.exports = DefaultLayout;
