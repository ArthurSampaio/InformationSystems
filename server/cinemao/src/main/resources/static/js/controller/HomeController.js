'use strict';
/**
 * Entity who manager the home page 
 */
angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'view/home.html',
            controller: 'HomeController'
        });
    }])

    .controller('HomeController', ['$scope', 'UserService',
        function ($scope, UserService) {

            /**
             * Load a set of series presents in perfil
             */
            function _load() {

                UserService.getListOfPerfil().then(
                    function (response) {
                        $scope.listOfPerfil = response.reverse();
                    })

            };

            _load();


            $scope.rateMedia = function (rating) {

                const media = angular.copy($scope.mediaModal);
                UserService.addRatingToMedia(media, rating).then(
                    function (response) {
                        console.log(response);
                        $scope.rating = null;
                        _load();
                    })
            }

            /**
             * Add a commentarie to a single media
             */
            $scope.addComment = function (commentary) {
                const media = angular.copy($scope.mediaModal);
                UserService.addCommentToSerie(media, commentary).then(
                    function (response) {
                        $scope.commentary = null;
                        _load();
                    });
            }


            $scope.getInfoForModal = function (movie) {
                $scope.mediaModal = angular.copy(movie);
            }

            $scope.getMediaToBeRemoved = function (movie) {
                $scope.mediaTobeRemoved = angular.copy(movie);
                console.log(movie);
            }

            $scope.removeMediaFromPerfil = function () {

                const media = angular.copy($scope.mediaTobeRemoved);
                UserService.removeMediaFromPerfil(media).then(
                    function (data) {
                        if (data.response) {
                            _load();
                        }
                    });
            }

        }]);