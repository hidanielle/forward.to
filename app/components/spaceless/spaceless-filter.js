'use strict';

angular.module('myApp.convertSpaces', [])

.filter('spaceless',function() {
  return function(input) {
    if (input) {
      var nospaces = input.replace(/\s+/g, '-')
      return encodeURIComponent(nospaces);    
    }
  }
})
