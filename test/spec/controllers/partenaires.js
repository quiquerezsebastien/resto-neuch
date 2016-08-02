'use strict';

describe('Controller: PartenairesCtrl', function () {

  // load the controller's module
  beforeEach(module('restoneuchApp'));

  var PartenairesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PartenairesCtrl = $controller('PartenairesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PartenairesCtrl.awesomeThings.length).toBe(3);
  });
});
