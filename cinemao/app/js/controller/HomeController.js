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
                        console.log(response);
                        $scope.listOfPerfil = response;
                    }
                )

            })();




        }]);