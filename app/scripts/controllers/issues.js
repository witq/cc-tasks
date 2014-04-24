'use strict';

angular.module('tasksApp')
  .controller('IssuesCtrl', function ($scope, Issues) {
    Issues.$get({issueId: 2}).then(function (response) {
      $scope.issue = response;
    });
    Issues.$get().then(function (response) {
      $scope.issues = response;
    });
  });
