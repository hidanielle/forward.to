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

  $scope.addOccasion = function(occasion) {
    console.log($scope.occasions.indexOf(occasion));

    $scope.occasions.push({
      'id': $filter('spaceless')($filter('lowercase')($scope.occasion.name) + '-' +  $filter('date')($scope.occasion.date , 'MM-dd-yyyy')) + '-' + $scope.occasions.length,
      'name': $scope.occasion.name,
      'date': new Date($scope.occasion.date)
    });
    $scope.occasion = {};
    $scope.occasionForm.$setPristine();

  }
  $scope.removeOccasion = function (occasion) {
    $scope.occasions.splice($scope.occasions.indexOf(occasion),1);
  };

}]);