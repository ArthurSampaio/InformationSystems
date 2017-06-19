'use strict';

angular.module('myApp.busca', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/busca/:tag/:page', {
            templateUrl: 'view/busca.html',
            controller: 'BuscaController',
            resolve: {
                data: ['$route', 'QueryService', function ($route, QueryService) {
                    return QueryService.searchByTitle($route.current.params.tag, $route.current.params.page).then(
                        function (response) {
                            return response.data;
                        }
                    );
                }],
                title: ['$route', function ($route) {
                    return $route.current.params.tag;
                }],
                page: ['$route', function ($route) {
                    return $route.current.params.page;
                }]
            }
        });
    }])


    .controller('BuscaController', ['$scope', '$location', 'data', 'QueryService', 'title', 'page', 'UserService', 'ngToast',
        function ($scope, $location, data, QueryService, title, page, UserService, ngToast) {

            const NEXT = 1;

            (function () {
                if (data.Response === "True") {
                    $scope.isValidTitle = true;
                    $scope.moviesFinded = [].concat(data.Search);

                } else {
                    $scope.isValidTitle = false;
                    $scope.moviesFinded = [];
                    $scope.tag = title;

                }
            })();

            $scope.addToPerfil = function (media) {

                UserService.addMediaToPerfil(media).then(
                    function (data) {
                        console.log(data.response);
                        if (data.response) {
                            ngToast.create({
                                className: 'success',
                                content: media.Title + ', was added with success in your perfil.', dismissOnTimeout: true,
                                dismissButton: true,
                                dismissOnClick: false
                            });
                        }else{
                            ngToast.create({
                                className: 'danger',
                                content: media.Title + ', already be part of your perfil.', 
                                dismissOnTimeout: true,
                                dismissButton: true,
                                dismissOnClick: false
                            });

                        }
                    });


            }

            $scope.addToWatchlist = function (media) {
                 UserService.addMediaToWatchlist(media).then(
                    function (data) {
                        console.log(data.response);
                        if (data.response) {
                            ngToast.create({
                                className: 'success',
                                content: media.Title + ', was added with success in your watchlist.', 
                                dismissOnTimeout: true,
                                dismissButton: true,
                                dismissOnClick: false
                            });
                        }else{
                            ngToast.create({
                                className: 'danger',
                                content: media.Title + ', already be part of your watchlist.', 
                                dismissOnTimeout: true,
                                dismissButton: true,
                                dismissOnClick: false
                            });

                        }
                    });
            }

            $scope.next = function () {

                const nextPage = Number(page) + NEXT;

                if (nextPage <= 100) {
                    $location.path('/busca/' + title + '/' + nextPage);
                }

            }

            $scope.previous = function () {

                const previousPage = Number(page) - NEXT;
                if (previousPage >= 1) {
                    $location.path('/busca/' + title + '/' + previousPage);
                }

            }




        }]);

