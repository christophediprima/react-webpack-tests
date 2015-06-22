'use strict';

var MainMenu = require('./MainMenu');
var UserMenu = require('./UserMenu');

var React = require('react/addons');

//var Actions = require('actions/xxx')

var imageURL = require('../images/yeoman.png');

require('styles/DefaultLayout.sass');

var DefaultLayout = React.createClass({

  render: function () {
    return (
      <div className='default layout main'>
        <img src={imageURL} />
        <MainMenu />
        <UserMenu />
        {this.props.children}
      </div>
      );
  }
});

module.exports = DefaultLayout;
