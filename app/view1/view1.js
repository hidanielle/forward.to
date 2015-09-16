'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$filter', 'localStorageService', 'Occasion', function($scope, $filter, localStorageService, occasionsInStore) {
  $scope.orderProp = 'date';

  $scope.addOccasion = function() {
    $scope.occasions.push({
      'id': $filter('spaceless')($scope.occasion.name + '-' +  $filter('date')($scope.occasion.date , 'mm-dd-yyyy')),
      'name': $scope.occasion.name,
      'date': new Date($scope.occasion.date)
    });
  }
  $scope.removeOccasion = function (index) {
    $scope.occasions.splice(index, 1);
  };
  
}]);