'use strict';

angular.module('myApp.busca', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/busca/:tag', {
    templateUrl: 'view/busca.html',
    controller: 'BuscaController',
    resolve: {
        tag : ['$route', function($route) {
            return $route.current.params.tag;
        }]
    }
  });
}])


.controller('BuscaController', ['$scope', 'tag', function($scope, tag) {

    const self = this; 
    console.log(tag);
    $scope.tag = tag; 


}]);

