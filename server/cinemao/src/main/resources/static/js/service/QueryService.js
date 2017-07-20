/**
 * Represents a entity who talk with the server. 
 */
angular.module('myApp').service('QueryService', function($q, $http, config){

    const SEARCH = "s=";
    const PAGE = "&page="
    const IMDB_ID = "i=";
    const SERIES = "/series/";
    const USER = "/user/";

    

    /**
     * Get a series by your title
     * @param {*String} title 
     * @param {*String} page 
     */
    function _searchByTitle(title, page){

        return $http.get(config.baseUrl + SEARCH + title + PAGE + page)

    }

    function _getInfoByImdbID (mediaID){
        return $http.get(config.baseUrl + IMDB_ID + mediaID);
    }

    function _makeLogin (email, password){
        
        const user = {"password": password, "email":email}

        return $http.post( USER + "login", JSON.stringify(user));

    }

    function _addSeriesToUser(user, movie){

        return $http.post(SERIES + "add/" + user.id, JSON.stringify(movie));

    }

    function _seriesByUserID(userId){
        return $http.get(SERIES + userId);
    }

    function _deleteSeriesByID(serieID){
        return $http.delete(SERIES + serieID);

    }

    function _registerUser(user){
        console.log(user);
        return $http.post(USER + "create", JSON.stringify(user));
    }

    function _updateSeries(series){
        return $http.put(SERIES, JSON.stringify(series));
    }


    return {
        searchByTitle : _searchByTitle, 
        getInfoByImdbID : _getInfoByImdbID, 
        makeLogin : _makeLogin, 
        addSeriesToUser: _addSeriesToUser, 
        seriesByUserID : _seriesByUserID, 
        deleteSeriesByID : _deleteSeriesByID, 
        registerUser: _registerUser, 
        updateSeries : _updateSeries
     
    }


})