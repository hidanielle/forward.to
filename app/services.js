'use strict';

/* Services */

angular.module('myApp.occasionServices', [])

.factory('Occasion', function(localStorageService, $rootScope){
  var occasionsInStore = localStorageService.get('occasions');
  $rootScope.occasions = occasionsInStore || [];


  $rootScope.$watch('occasions', function () {
    localStorageService.set('occasions', $rootScope.occasions);
  }, true);

  return $rootScope.occasions;

});
