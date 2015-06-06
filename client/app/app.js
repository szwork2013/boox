'use strict';

angular.module('booxApp', [
  'brantwills.paging',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]).controller('booksController', ['$scope', '$http', '$resource', function($scope, $http, $resource) {
  //TODO: grab from storage
  $scope.pageNum = 1;
  $scope.pageSize = 5;

  var Book = $resource('/api/books/:bookId', {bookId:'@id'},
    { 'get':    {method:'GET'},
      'save':   {method:'POST'},
      'query':  {method:'GET', params: {page: '@page' }},
      'delete': {method:'DELETE'}});

  $scope.changePage = function(pageNum) {
    //TODO: error handling witn ngResource
    var data = Book.query({page: pageNum}, function () {
      console.log('switched to page ',  pageNum);

      $scope.rawContent = data.books;
      $scope.counts = data.counts;
    });
  };

  $scope.changePage($scope.pageNum);
}]);
//$locationProvider.html5Mode(true);
