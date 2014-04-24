'use strict';

angular.module('tasksApp')
  .service('Issues', function ($resource) {
    return $resource(
      '/issues/:issueId',
      {
        issueId: '@id'
      },
      {
        query: {
          method: 'GET',
          isArray: false
        }
      }
    );
  });
