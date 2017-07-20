'use strict';

angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'view/login.html',
            controller: 'LoginController'
        });
    }])

    .controller('LoginController', ['$scope', '$location', '$rootScope', 'AuthService', 'ngToast',
        function ($scope, $location, $rootScope, AuthService, ngToast) {

            console.log($rootScope.loggedInUser)

            /**
             * Sign in an account
             */
            $scope.login = function (email, password) {


                AuthService.login(email, password).then(

                    function (response) {
                        if (response.status !== 400) {
                            $rootScope.loggedInUser = response;
                            $location.path('/home');
                        } else {
                            createToast('danger', 'Something goes wrong. Email or password are incorrect.');
                        }
                    }
                )
            }

            /**
             * Register a new user
             */
            $scope.registerUser = function (user) {
                console.log(user);
                return AuthService.registerAccount(user).then(
                    function (response) {
                        console.log(response);
                        createToast('success', 'User registered with success');
                    }, function (error) {
                        createToast('danger', 'Something goes wrong.');

                    })

            }

            /**
             * 
             * @param {String} status 
             * @param {*String} message 
             */
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