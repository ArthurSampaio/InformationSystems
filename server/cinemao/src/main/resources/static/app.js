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

  .run(['$rootScope', '$location', 'UserService', function ($rootScope, $location, UserService) {



    $rootScope.$on("$routeChangeStart", function (event, next, current) {
      if ($rootScope.loggedInUser == null) {
        $location.path("/login");

      }
    })

    const INITIAL_PAGE = 1;


    $rootScope.buscar = function (tag) {

      $location.path('/busca/' + tag + '/' + INITIAL_PAGE);
      $rootScope.tag = null;

    };

    $rootScope.logout = function () {

      $rootScope.loggedInUser = null;
      $location.path("/login");
      localStorage.clear();
        
    }

  }]);


