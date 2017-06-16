'use strict';

angular.module('myApp.busca', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/busca/:tag', {
    templateUrl: 'view/busca.html',
    controller: 'BuscaController',
    resolve: {
        data : ['$route','QueryService', function($route, QueryService) {
            return QueryService.searchByTitle($route.current.params.tag);
        }]
    }
  });
}])


.controller('BuscaController', ['$scope', 'data','QueryService', function($scope, data, QueryService) {

    const self = this; 
    self.creu = "creu";
    
    $scope.urlData =[ "https://images-na.ssl-images-amazon.com/images/M/MV5BOTA4MTE3MTQwMF5BMl5BanBnXkFtZTgwNzk4MTg4MTI@._V1_SX300.jpg", 
    "http://3milliondogs.com/blog-assets-two/2015/03/goldenlab.jpg",
     "http://legacy.semantic-ui.com/images/demo/photo.jpg",
     "https://img.clasf.co.ve/2016/03/27/regalo-cachorros-siberian-husky-cachorros-jose-antonio-paez-201603271602546431020000.jpg"];

     console.log(data)
     
}]);

