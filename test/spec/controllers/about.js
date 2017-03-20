'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('oneSkyTestApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should contain the function that marks all messages as read', function () {
    expect(AboutCtrl.clearNotifications).toBeDefined();
  });
});
