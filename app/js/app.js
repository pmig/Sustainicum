'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ui.bootstrap']).
  config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  	$locationProvider.html5Mode(true).hashPrefix('!');

    $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: HomeCtrl});
    $routeProvider.when('/spiel', {templateUrl: 'partials/spiel.html', controller: SpielCtrl});
    $routeProvider.when('/ueberuns',{templateUrl: 'partials/ueberuns.html', controller: UeberunsCtrl});
    $routeProvider.otherwise({redirectTo: '/'});
}]).run(['$rootScope','$location',function($rootScope, $location) {
	$rootScope.location = $location;
}]);


