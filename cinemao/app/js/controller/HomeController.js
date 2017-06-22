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

            function _load() {
                UserService.getListOfPerfil().then(
                    function (response) {
                        $scope.listOfPerfil = response;
                })
            };

            _load();

            $scope.getInfoForModal = function (movie) {
                $scope.mediaModal = angular.copy(movie);
            }

            $scope.getMediaToBeRemoved = function (movie) {
                $scope.mediaTobeRemoved = angular.copy(movie);
            }

            $scope.removeMediaFromPerfil = function () {

                const media = angular.copy($scope.mediaTobeRemoved);
                UserService.removeMediaFromPerfil(media).then(
                    function (data) {
                        if (data.response) {
                            _load();
                        }
                    })
            }

        }]);