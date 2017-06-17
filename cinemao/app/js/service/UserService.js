angular.module('myApp').service('UserService', function($q, $http, config){

    const USER_ACTUAL = "USER";


    this.user; 

    (function(){
        if(typeof(Storage) !== "undefined"){
            let user_cached = localStorage.getItem(USER_ACTUAL) 
            if(user_cached !== null){
                this.user = JSON.parse(user_cached);
            }else{
                this.user = new User();
            }

        }else{
            this.user = new User();
        }

    })();    

    function addWatchlist (movie){
        const result = this.user.addWatchlist(movie);
        //TODO: retornar promessa
    }


})