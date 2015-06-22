'use strict';

var React = require('react/addons');

var Menu = require('./Menu');


//var Actions = require('actions/xxx')

require('styles/DeadEndLayout.sass');

var DeadEndLayout = React.createClass({

  render: function () {
    return (
      <div className='dead-end layout main'>
        <a className="back-btn" onClick={this.back}>Retour</a>
        <Menu />
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
