'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'view/home.html',
            controller: 'HomeController'
        });
    }])

    .controller('HomeController', ['$scope', 'UserService',
        function ($scope, UserService) {

            function _load() {
            
                UserService.getListOfPerfil().then(
                    function (response) {
                        $scope.listOfPerfil = response;
                })
            };

            _load();

            $scope.rateMedia = function(rating){
                
                const media = angular.copy($scope.mediaModal);
                UserService.addRatingToMedia(media, rating).then(
                    function(data){
                        if(data.response){
                            console.log($scope.mediaModal.my_rating);
                             $scope.rating = null;
                             _load();
                        }
                    }
                );
            }

            $scope.addComment = function (commentary){
                const media = angular.copy($scope.mediaModal);
                UserService.addCommentToSerie(media, commentary).then(
                    function(data){
                        if(data.response){
                            console.log($scope.mediaModal.commentaries);
                            _load();
                            $scope.commentary = {'episode': "", 'description':""};
                            $scope.commentary = null;
                            
                        }
                    }
                )
            }
            

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
                    });
            }

        }]);