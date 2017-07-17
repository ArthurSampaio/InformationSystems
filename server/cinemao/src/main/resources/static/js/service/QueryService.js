angular.module('myApp').service('QueryService', function($q, $http, config){

    const SEARCH = "s=";
    const PAGE = "&page="
    const IMDB_ID = "i="

    

    function _searchByTitle(title, page){

        return $http.get(config.baseUrl + SEARCH + title + PAGE + page)

    }

    function _getInfoByImdbID (mediaID){
        return $http.get(config.baseUrl + IMDB_ID + mediaID);
    }

    function _makeLogin (email, password){
        
        let user = {"password": password, "email":email}

        return $http.post("/user/login", JSON.stringify(user));

    }

    function _addSeriesToUser(user, movie){

        return $http.post("/series/add/" + user.id, JSON.stringify(movie));

    }

    function _seriesByUserID(userId){
        return $http.get("/series/" + userId);
    }


    return {
        searchByTitle : _searchByTitle, 
        getInfoByImdbID : _getInfoByImdbID, 
        makeLogin : _makeLogin, 
        addSeriesToUser: _addSeriesToUser, 
        seriesByUserID : _seriesByUserID
     
    }


})