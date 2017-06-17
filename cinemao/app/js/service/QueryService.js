angular.module('myApp').service('QueryService', function($q, $http, config){

    const SEARCH = "s=";
    const PAGE = "&page="

    function _searchByTitle(title, page){

        return $http.get(config.baseUrl + SEARCH + title + PAGE + page);

    }

    

    return {
        searchByTitle : _searchByTitle
    }


})