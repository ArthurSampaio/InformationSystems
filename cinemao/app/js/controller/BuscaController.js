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


    .controller('BuscaController', ['$scope', '$location', 'data', 'QueryService', 'title', 'page',
        function ($scope, $location, data, QueryService, title, page) {

            const NEXT = 1;

            function loadData() {
                if (data.Response === "True") {
                    $scope.isValidTitle = true;
                    $scope.moviesFinded = [].concat(data.Search);
                    console.log("ENTROU");

                } else {
                    $scope.isValidTitle = false;
                    $scope.moviesFinded = [];
                    $scope.tag = title;

                }
            }

            $scope.next = function () {

                const nextPage = Number(page) + NEXT;
                $location.path('/busca/' + title + '/' + nextPage);

            }


            loadData();


        }]);

