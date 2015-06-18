'use strict';

describe('UserMenu', function () {
  var React = require('react/addons');
  var UserMenu, component;

  beforeEach(function () {
    UserMenu = require('components/UserMenu.js');
    component = React.createElement(UserMenu);
  });

  it('should create a new instance of UserMenu', function () {
    expect(component).toBeDefined();
  });
});
