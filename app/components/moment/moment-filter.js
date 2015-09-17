'use strict';

angular.module('myApp.momentFilters', [])

.filter('isFuture', function() {
  return function(items) {
    return items.filter(function(item){
      return moment(item.date).isAfter(new Date());
    })
  }
})

.filter('isAfter', function() {
  return function(items, dateAfter) {
    // Using ES6 filter method
    return items.filter(function(item){
      return !moment(item.date).isAfter(new Date());
    })
  }
})