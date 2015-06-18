'use strict';

describe('PropertyPage', function () {
  var React = require('react/addons');
  var PropertyPage, component;

  beforeEach(function () {
    PropertyPage = require('components/PropertyPage.js');
    component = React.createElement(PropertyPage);
  });

  it('should create a new instance of PropertyPage', function () {
    expect(component).toBeDefined();
  });
});
