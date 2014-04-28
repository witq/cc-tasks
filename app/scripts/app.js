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
      .when('/issues/:Id', {
        templateUrl: 'views/issue.html',
        controller: 'IssueCtrl'
      })
      .when('/issues', {
        templateUrl: 'views/issues.html',
        controller: 'IssuesCtrl'
      })
      .when('/users/:Id', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
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
          'assignee': {
            name: 'Arek Zając',
            id: 'azajac'
          },
          'updatedAt': '2013-09-12T06:20:31+0000',
          'createdAt': '2013-09-12T06:20:31+0000'
        },
        {
          'id': 2,
          'title': 'Add new horse',
          'description': 'Lorem ipsum...',
          'status': 'In Progress',
          'type': 'Task',
          'priority': 'major',
          'assignee': {
            name: 'Witek Galecki',
            id: 'wgalecki'
          },
          'updatedAt': '2013-09-12T06:20:31+0000',
          'createdAt': '2013-09-12T06:20:31+0000'
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
    $httpBackend.when('PUT', /issues\/[0-9]+/).respond(function (method, url, data) {
      var urlSegments = url.split('/'),
        match = parseInt(urlSegments[2]),
        index;
      issues.data.forEach(function (issue) {
        if (issue.id === match) {
          index = issues.data.indexOf(issue);
        }
      });
      issues.data[index] = angular.fromJson(data);
      return [200, {}, data];
    });
    $httpBackend.whenGET(/.*/).passThrough();
  });
