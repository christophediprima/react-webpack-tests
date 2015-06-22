'use strict';

describe('DeadEndLayout', function () {
  var React = require('react/addons');
  var DeadEndLayout, component;

  beforeEach(function () {
    DeadEndLayout = require('components/DeadEndLayout.js');
    component = React.createElement(DeadEndLayout);
  });

  it('should create a new instance of DeadEndLayout', function () {
    expect(component).toBeDefined();
  });
});
