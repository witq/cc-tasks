'use strict';

angular.module('tasksApp')
  .service('Issues', function Issues($resource) {
    var IssueResource = $resource('/issues/:issueId');
    return new IssueResource();
  });
