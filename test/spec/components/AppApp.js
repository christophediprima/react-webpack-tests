'use strict';

describe('AppApp', function () {
  var React = require('react/addons');
  var AppApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    AppApp = require('components/AppApp.js');
    component = React.createElement(AppApp);
  });

  it('should create a new instance of AppApp', function () {
    expect(component).toBeDefined();
  });
});
