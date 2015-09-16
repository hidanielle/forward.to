'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/occasions/:occasionID', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });

}])

.controller('View2Ctrl', ['$scope', '$routeParams', 'Occasion', 
  function($scope, $routeParams, occasions) {

    for (var i = 0; i < occasions.length; i++){
      if (occasions[i].id == $routeParams.occasionID){
        $scope.occasion = occasions[i];
      }
    }

}]);