'use strict';

angular
  .module('tasksApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngMockE2E'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/issues', {
        templateUrl: 'views/issues.html',
        controller: 'IssuesCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($httpBackend) {
    var issues = {
      'data': [
        {
          'id': 1,
          'title': 'Add new user',
          'description': 'Lorem ipsum...',
          'status': 'In Progress',
          'type': 'Task',
          'priority': 'major',
          'assignee': 'Arek Zając',
          'updated_at': '2013-09-12T06:20:31+0000',
          'created_at': '2013-09-12T06:20:31+0000'
        },
        {
          'id': 2,
          'title': 'Add new horse',
          'description': 'Lorem ipsum...',
          'status': 'In Progress',
          'type': 'Task',
          'priority': 'major',
          'assignee': 'Witek Galecki',
          'updated_at': '2013-09-12T06:20:31+0000',
          'created_at': '2013-09-12T06:20:31+0000'
        }
      ],
      'paging': {
        'itemsCount': 1110
      }
    };
    $httpBackend.whenGET(/issues\/[0-9]+/).respond(function (method, url) {
      var urlSegments = url.split('/'),
        m = parseInt(urlSegments[2]),
        response;
      issues.data.forEach(function (issue) {
        if (issue.id === m) {
          response = issue;
        }
      });
      return [200, response, {}];
    });
    $httpBackend.when('GET', '/issues').respond(issues);
    $httpBackend.whenGET(/.*/).passThrough();
  });
