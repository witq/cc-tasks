'use strict';

angular.module('tasksApp')
  .controller('IssuesCtrl', function ($scope, Issues) {
    Issues = new Issues;
    Issues
      .$get({
        issueId: 2
      })
      .then(function (response) {
        $scope.issue = response;
      });
    Issues.$query().then(function (response) {
      $scope.issues = response;
    });
  });
