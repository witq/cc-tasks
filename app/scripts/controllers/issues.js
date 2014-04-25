'use strict';

angular.module('tasksApp')
  .controller('IssuesCtrl', function ($scope, Issues) {
    $scope.issue = Issues.get({},{Id: 2});
    $scope.issues = Issues.get();
  });
