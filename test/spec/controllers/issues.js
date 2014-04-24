'use strict';

describe('Controller: IssuesCtrl', function () {

  // load the controller's module
  beforeEach(module('tasksApp'));

  var IssuesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IssuesCtrl = $controller('IssuesCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of issues to the scope', function () {
  //   expect(scope.issues.data.length).toBe(2);
  // });
});
