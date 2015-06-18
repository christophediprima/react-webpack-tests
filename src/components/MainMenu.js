'use strict';

var React = require('react/addons');

var Link = require('react-router').Link;
var Navigation = require('react-router').Navigation;

//var Actions = require('actions/xxx')

require('styles/MainMenu.sass');

var MainMenu = React.createClass({
  mixins: [Navigation],
  render: function () {
    return (
        <ul className="MainMenu">
          <li>
            <Link routeName='home' to="home" onClick={this.goToRoute}>Home</Link>
          </li>
          <li>
            <Link to="propertyList">Property List</Link>
          </li>
          <li>
            <Link to="property" params={{propertyId: 1}}>Property</Link>
          </li>
        </ul>
      );
  },
  goToRoute: function(e){
    e.preventDefault();
    console.log(e.target);
    this.transitionTo(e.target.routeName);
  }
});

module.exports = MainMenu;
