angular.module('myApp').service('UserService', function ($q, $http, config) {

    const USER_ACTUAL = "USER";

    function load() {
        if (typeof (Storage) !== "undefined") {
            let user_cached = _getInternalUser();
            if (user_cached !== null) {
                let auxUser = JSON.parse(user_cached);
                this.user = new User(auxUser._watchlist, auxUser._perfil);
                
            } else {
                this.user = new User();
            }

        } else {
            this.user = new User();
        }
        return this.user;
    };

   
    function _addMediaToPerfil (media){
        let user = load();
        console.log(user);
        const result = user.addPerfil(media);

        return new Promise(function(resolve, reject){
            if(result){
                localStorage.setItem('USER', JSON.stringify(user));
                resolve({'response':true});
            }else{
                reject({'response':false});
            }
        });
    }


    function _getInternalUser(){
        return localStorage.getItem(USER_ACTUAL);
    }

    return {
        addMediaToPerfil : _addMediaToPerfil
    }

})