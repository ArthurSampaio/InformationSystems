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
                        $scope.test = "AUSHUSAH";
                        console.log(data.response);

                        ngToast.create({
                            className: 'danger',
                            content: 'IEEEIIII', dismissOnTimeout: false,
                            dismissButton: true,
                            dismissOnClick: false
                        });

                        if (!data.response) {
                            alert("Você já cadastrou essa bagaça");
                        }

                    });


            }

            $scope.addToWatchlist = function (media) {
                console.log(media);
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

