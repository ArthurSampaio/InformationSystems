'use strict';

angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'view/login.html',
            controller: 'LoginController'
        });
    }])

    .controller('LoginController', ['$scope', '$location', '$rootScope', 'UserService','ngToast',
        function ($scope, $location, $rootScope, UserService, ngToast) {

            console.log($rootScope.loggedInUser)

            $scope.login = function (email, password) {

                UserService.login(email, password).then(
                    function (response) {
                        $rootScope.loggedInUser = response;
                        $location.path('/home');

                    }
                )
            }

            $scope.registerUser = function(user){

                return UserService.registerAccount(user).then(
                    function(response){
                         createToast('success', 'User registered with success');
                    }, function(error){
                         createToast('danger', 'Something goes wrong');

                    }
                )
                
            }

             function createToast(status, message) {
                return ngToast.create({
                    className: status,
                    content: message,
                    dismissOnTimeout: true,
                    dismissButton: true,
                    dismissOnClick: false
                });
            }


        }]);