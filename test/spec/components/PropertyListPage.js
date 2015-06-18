'use strict';

describe('PropertyListPage', function () {
  var React = require('react/addons');
  var PropertyListPage, component;

  beforeEach(function () {
    PropertyListPage = require('components/PropertyListPage.js');
    component = React.createElement(PropertyListPage);
  });

  it('should create a new instance of PropertyListPage', function () {
    expect(component).toBeDefined();
  });
});
