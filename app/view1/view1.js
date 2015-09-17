'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forward-to', {
    templateUrl: 'view1/forward-to.html',
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
    $scope.occasion = {};
    $scope.occasionForm.$setPristine();
  }
  $scope.removeOccasion = function (index) {
    $scope.occasions.splice(index, 1);
  };

}]);