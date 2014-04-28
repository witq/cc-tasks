'use strict';

angular.module('tasksApp')
  .controller('IssuesCtrl', function ($scope, Issues) {
    $scope.issues = Issues.get();
  });
