'use strict';

angular.module('tasksApp')
  .controller('IssueCtrl', function ($scope, $route, Issues) {
    var issueId = $route.current.params.Id;
    $scope.issue = Issues.get({}, {Id: issueId});
    $scope.updateIssue = function () {
      Issues.update({Id: issueId}, $scope.issue);
    };
  });
