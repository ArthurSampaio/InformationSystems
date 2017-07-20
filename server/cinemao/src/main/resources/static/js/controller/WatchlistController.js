'use strict';

/**
 * The watchlist page controller. 
 * It has Has almost all the responsibilities on the series in the watchlist
 */
angular.module('myApp.watchlist', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/watchlist', {
            templateUrl: 'view/watchlist.html',
            controller: 'WatchlistController'
        });
    }])


    .controller('WatchlistController', ['$scope', 'UserService',
        function ($scope, UserService) {

            /**
             * Load a list of series in watchlist
             */
            function _load() {
                UserService.getListOfWatchlist().then(
                    function (response) {
                        $scope.listOfWatchlist = response;
                       
                    })
            };

            _load();

            $scope.getInfoForModal = function (movie) {
                $scope.mediaModal = angular.copy(movie);
            }

            /**
             * Add a series in perfil; 
             */
            $scope.addToPerfil = function (){
                let media = angular.copy($scope.mediaModal);
                UserService.addMediaFromWatchlistToPerfil( $scope.modalPerfil).then(
                     function (data) {
                        if (data.response) {
                            _load();
                        }
                    });
                
                
            }

            $scope.getInfoForPerfil = function(movie){
                $scope.modalPerfil = angular.copy(movie);
            }


        }]);

