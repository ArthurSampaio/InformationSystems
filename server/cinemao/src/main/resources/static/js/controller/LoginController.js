'use strict';

angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'view/login.html',
            controller: 'LoginController'
        });
    }])

    .controller('LoginController', ['$scope', '$location', '$rootScope',
        function ($scope, $location, $rootScope) {

          
            $scope.login = function (email, password) {
                let deubom = true; 
            

                console.log(email);
                console.log(password);
                 
            }

        }]);