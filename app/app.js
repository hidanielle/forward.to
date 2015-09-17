'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.momentFilters',
  'myApp.occasionServices',
  'myApp.convertSpaces',
  'angularMoment',
  'LocalStorageModule'
])
.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/forward-to'});
}])
.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);
