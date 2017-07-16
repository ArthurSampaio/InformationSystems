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

            console.log($location.$$path);
            $scope.login = function (user) {
                let deubom = true; 
                if(deubom) $rootScope.loggedInUser = "username"; 
                
            }

        }]);