'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'view/home.html',
            controller: 'HomeController'
        });
    }])

    .controller('HomeController', ['$scope', '$location', 'QueryService', 'UserService',
        function ($scope, $location, QueryService, UserService) {


            (function () {
                UserService.getListOfPerfil().then(
                    function (response) {
                        $scope.listOfPerfil = response;
                    }
                )

            })();

            $scope.getInfoForModal = function (movie) {
                console.log(movie);
                $scope.mediaModal = angular.copy(movie); 
            }

            $scope.removeMediaFromPerfil = function (movie){

                $scope.mediaTobeRemoved = angular.copy(movie);


            }



        }]);