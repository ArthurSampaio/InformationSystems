'use strict';

angular.module('myApp.watchlist', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/watchlist', {
            templateUrl: 'view/watchlist.html',
            controller: 'WatchlistController'
        });
    }])


    .controller('WatchlistController', ['$scope', 'UserService',
        function ($scope, UserService) {

            function _load() {
                UserService.getListOfWatchlist().then(
                    function (response) {
                         console.log(response);
                        $scope.listOfWatchlist = response;
                       
                    })
            };

            _load();

            $scope.getInfoForModal = function (movie) {
                $scope.mediaModal = angular.copy(movie);
            }

            $scope.addToPerfil = function (movie){
                UserService.addMediaFromWatchlistToPerfil(movie).then(
                    function(data){
                        if(data.response){
                            _load();
                        }
                    }
                )
            }


        }]);

