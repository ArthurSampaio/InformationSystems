'use strict';

angular.module('myApp.watchlist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/watchlist', {
    templateUrl: 'view/watchlist.html',
    controller: 'WatchlistController'
  });
}])


.controller('WatchlistController', [function() {





}]);

