'use strict';

describe('DefaultLayout', function () {
  var React = require('react/addons');
  var DefaultLayout, component;

  beforeEach(function () {
    DefaultLayout = require('components/DefaultLayout.js');
    component = React.createElement(DefaultLayout);
  });

  it('should create a new instance of DefaultLayout', function () {
    expect(component).toBeDefined();
  });
});
