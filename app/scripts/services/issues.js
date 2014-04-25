'use strict';

angular.module('tasksApp')
  .factory('Issues', function ($resource) {
    return $resource(
      '/issues/:Id',
      { Id: '@Id' }
    );
  });
