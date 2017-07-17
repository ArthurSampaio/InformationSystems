'use strict';

angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'view/login.html',
            controller: 'LoginController'
        });
    }])

    .controller('LoginController', ['$scope', '$location', '$rootScope', 'UserService',
        function ($scope, $location, $rootScope, UserService) {

            console.log($rootScope.loggedInUser)

            $scope.login = function (email, password) {

                password = "12365614";
                email = "arthursampaio@a.com";

                UserService.login(email, password).then(
                    function (response) {
                        $rootScope.loggedInUser = response;
                        $location.path('/home');

                    }
                )


            }

        }]);