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
    
    function _updateUser (user){

        console.log(user);
        return $http.post("/user/update", JSON.stringify(user));

    }

    

    return {
        searchByTitle : _searchByTitle, 
        getInfoByImdbID : _getInfoByImdbID, 
        makeLogin : _makeLogin, 
        updateUser : _updateUser
    }


})