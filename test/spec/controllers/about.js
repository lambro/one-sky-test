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

  it('should contain the function that marks all notifications as read', function () {
    expect(scope.clearNotifications).toBeDefined();
  });  

  it('should contain the function that marks the clicked notification as read', function () {
    expect(scope.clearNotiication).toBeDefined();
  });  

  it('should contain the function that accepts a request', function () {
    expect(scope.acceptRequest).toBeDefined();
  });

  it('should contain the function that declines a request', function () {
    expect(scope.declineRequest).toBeDefined();
  });
});
