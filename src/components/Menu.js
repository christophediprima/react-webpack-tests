'use strict';

var React = require('react/addons');
var Reflux = require('Reflux');

var Link = require('react-router').Link;

var MenuStore = require('stores/MenuStore');

//var Actions = require('actions/xxx')

require('styles/Menu.sass');

var Menu = React.createClass({
  mixins: [
    Reflux.connect(MenuStore)
  ],
  render: function () {
    let items = this.state.Menu.map((item)=>{
          return <li key={item.routeName}>
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
