'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp',
  'myApp.view1',
  'myApp.view2',
  'myApp.busca',
  'myApp.version'
])


.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});

}])

.run(['$rootScope', '$location', function($rootScope, $location) {
 
  const INITIAL_PAGE = 1;
  $rootScope.$on('$stateChangeError',
        function (event, toState, toParams, fromState, fromParams, error) {
            console.log(event, error);
        });

  $rootScope.buscar = function(tag){

    $location.path('/busca/'+tag + '/' +INITIAL_PAGE);
    $rootScope.tag = null;
   

  };      

}]);


