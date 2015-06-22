'use strict';

var React = require('react/addons');
var Reflux = require('Reflux');

var Link = require('react-router').Link;
var Navigation = require('react-router').Navigation;

var MenuStore = require('stores/MenuStore');

//var Actions = require('actions/xxx')

require('styles/Menu.sass');

var Menu = React.createClass({
  mixins: [
    Reflux.connect(MenuStore),
    Navigation
  ],
  render: function () {
    console.log(this.props);
    let items = this.state.Menu.map((item)=>{
          return <li>
            <Link to={item.routeName} params={item.params}>{item.label}</Link>
          </li>;
        }),
        className = this.props.className + ' Menu' || 'Menu';


    return (
        <ul className={className}>
          {items}
        </ul>
      );
  }
});

module.exports = Menu;
