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
    $httpBackend.whenGET('/issues').respond(issues);
    $httpBackend.whenGET(/issues\/[0-9]+/).respond(function (method, url) {
      var re1='.*?',  // Non-greedy match on filler
        re2='(\\d+)', // Integer Number 1
        response,
        p,
        m;

      p = new RegExp(re1+re2,['i']);
      m = p.exec(url);
      if (m !== null)
      {
        issues.data.forEach(function (issue) {
          if (issue.id === parseInt(m[1])) {
            response = issue;
          }
        });
      }
      return [200, response, {}];
    });
    $httpBackend.whenGET(/.*/).passThrough();
  });
