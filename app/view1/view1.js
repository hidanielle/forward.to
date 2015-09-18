'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forward-to', {
    templateUrl: 'view1/forward-to.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$filter', 'localStorageService', 'Occasion', 'smoothScroll', function($scope, $filter, localStorageService, occasionsInStore, smoothScroll) {
  
  $scope.orderProp = 'date';

  $scope.addOccasion = function(occasion) {
    $scope.occasions.push({
      'id': $filter('spaceless')($filter('lowercase')($scope.occasion.name) + '-' +  $filter('date')($scope.occasion.date , 'MM-dd-yyyy')) + '-' + $scope.occasions.length,
      'name': $scope.occasion.name,
      'date': new Date($scope.occasion.date)
    });
    $scope.occasion = {};
    $scope.occasionForm.$setPristine();

    var element = document.getElementById('mycountdowns');

    var options = {
      offset: 100
    }

    smoothScroll(element, options);
  }

  $scope.removeOccasion = function (occasion) {
    $scope.occasions.splice($scope.occasions.indexOf(occasion),1);
  };

}]);