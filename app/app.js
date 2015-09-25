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
  'LocalStorageModule',
  'smoothScroll',
  'ngFitText'
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

var originalHumanize = moment.duration.fn.humanize;
moment.duration.fn.humanize = function() {
    var days = Math.abs(this.asDays());
    
    if (days > 30) {
        return 'in ' + Math.round(days) + ' days';
    }
    return originalHumanize.apply(this, arguments);
};
