'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'view/home.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController',['$scope', '$location', 'QueryService', 'UserService',
        function ($scope, $location, QueryService, UserService) {


  $scope.test = "AUSHUSAHA"

  $scope.buscar = function(tag){
    console.log(tag);
  }

}]);