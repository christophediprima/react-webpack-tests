'use strict';

describe('MainMenu', function () {
  var React = require('react/addons');
  var MainMenu, component;

  beforeEach(function () {
    MainMenu = require('components/MainMenu.js');
    component = React.createElement(MainMenu);
  });

  it('should create a new instance of MainMenu', function () {
    expect(component).toBeDefined();
  });
});
