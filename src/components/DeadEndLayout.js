'use strict';

var React = require('react/addons');

var Menu = require('./Menu');
var Router = require('react-router');
var Link = Router.Link;


//var Actions = require('actions/xxx')

require('styles/DeadEndLayout.sass');

var DeadEndLayout = React.createClass({
  mixins: [
    Router.State
  ],
  componentWillMount: function(){
    console.log(history);
  },
  getInitialState: function(){
    console.log(this.getRoutes());
    return {
      backLink: 'propertyList'
    };
  },
  render: function () {
    console.log(this.state);
    return (
      <div className='dead-end layout main'>
        <Link to={this.state.backLink}>Retour</Link>
        <Menu className="tab-menu" />
        {this.props.children}
      </div>
      );
  },
  back: function(e){
    e.preventDefault();
    history.back();
  }
});

module.exports = DeadEndLayout;
