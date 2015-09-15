'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.orderProp = 'date';
  $scope.occasions = [
    {'name': '50th Wedding Anniversary',
     'date': new Date('2015-09-19T04:00:00.000Z')},
    {'name': 'House Warming',
     'date': new Date('2015-09-26T04:00:00.000Z')},
    {'name': 'Halloween Haunt',
     'date': new Date('2015-10-02T04:00:00.000Z')}
  ];
  $scope.addOccasion = function() {
    $scope.occasions.push({
      'name': $scope.occasion.name,
      'date': $scope.occasion.date 
    });
  }
}]);