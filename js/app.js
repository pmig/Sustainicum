'use strict';

// var environment = 'ghpages';
// if (window.location.host.indexOf('localhost') != -1) {
//   environment = 'local';
// }

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ui.bootstrap']).config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $routeProvider.when('/', {templateUrl: 'partials/home.html'});
  $routeProvider.when('/spiel', {templateUrl: 'partials/spiel.html', controller: SpielCtrl});
  $routeProvider.when('/spiel/szenario2', {templateUrl: 'partials/spiel2.html', controller: Spiel2Ctrl});
  $routeProvider.when('/spiel/szenario3', {templateUrl: 'partials/spiel3.html', controller: Spiel3Ctrl});
  $routeProvider.when('/baustein',{templateUrl: 'partials/baustein.html'});
  $routeProvider.when('/diskussion',{templateUrl: 'partials/diskussion.html'});
  $routeProvider.when('/impressum',{templateUrl: 'partials/impressum.html'});
  $routeProvider.otherwise({redirectTo: '/'});

  // if (environment === 'local') {
  //   $locationProvider.html5Mode(true).hashPrefix('!');
  //   $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: HomeCtrl});
  //   $routeProvider.when('/spiel', {templateUrl: 'partials/spiel.html', controller: SpielCtrl});
  //   $routeProvider.when('/ueberuns',{templateUrl: 'partials/ueberuns.html', controller: UeberunsCtrl});
  //   $routeProvider.otherwise({redirectTo: '/'});
  // }
}]).run(['$rootScope','$location',function($rootScope, $location) {
	$rootScope.location = $location;
}]);


