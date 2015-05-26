'use strict';

angular.module('booxApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
], function() {

}).controller('booksController', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/books').
    success(function(data, status, headers, config) {
      $scope.rawContent = data;
    }).
    error(function(data, status, headers, config) {
      $scope.rawContent = "Sorry, error has occured";
    });
}])

//$locationProvider.html5Mode(true);
