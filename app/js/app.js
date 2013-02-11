'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: HomeCtrl});
    $routeProvider.when('/spiel', {templateUrl: 'partials/spiel.html', controller: SpielCtrl});
    $routeProvider.when('/ueberuns',{templateUrl: 'partials/ueberuns.html', controller: UeberunsCtrl});
    $routeProvider.otherwise({redirectTo: '/home'});
}]).run(function($rootScope, $location) {
	$rootScope.location = $location;
});


