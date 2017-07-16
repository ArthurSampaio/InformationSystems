'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [

  'ngRoute',
  'myApp.login',
  'myApp.home',
  'myApp.busca',
  'myApp.version',
  'myApp.watchlist',

  'ngToast'

])


  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/home' });

  }])

  .controller('rootController', ['$scope', '$location', function ($scope, $location){

    $scope.page = $location.path(); 
    console.log($scope.page);

  }])

  .run(['$rootScope', '$location', function ($rootScope, $location) {

    let currentPage = $location.path(); 
    console.log(currentPage);

    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      if($rootScope.loggedInUser == null){
        $location.path("/login");
      }
    })

    const INITIAL_PAGE = 1;
    $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams, error) {
        console.log(event, error);

      });

    $rootScope.buscar = function (tag) {

      $location.path('/busca/' + tag + '/' + INITIAL_PAGE);
      $rootScope.tag = null;

    };

  }]);


