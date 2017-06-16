angular.module('myApp').factory('QueryService', function($q, $http, config){

    const SEARCH = "s=";

    function _searchByTitle(title){

        return $http.get(config.baseUrl + SEARCH + title);

    }

    

    return {
        searchByTitle : _searchByTitle
    }


})