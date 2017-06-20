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

    function _getListOfPerfil() {
        let user = load();
        return $q.when(user.perfil);
    }

    function _getListOfWatchlist() {
        let user = load();
        return $q.when(user.watchlist);
    }

    function _addMediaToPerfil(media) {
        let user = load();

        const result = user.addPerfil(media);
        return $q(function (resolve, reject) {
            if (result) {
                _saveInternalUser(user)
                resolve({ 'response': true });
            } else {
                resolve({ 'response': false });
            }
        });
    }

    function _addMediaToWatchlist(media) {
        let user = load();

        const result = user.addWatchlist(media);

        return $q(function (resolve, reject) {
            if (result) {
                _saveInternalUser(user)
                resolve({ 'response': true });
            } else {
                resolve({ 'response': false });
            }
        });
    }


    function _getInternalUser() {
        return localStorage.getItem(USER_ACTUAL);
    }

    function _saveInternalUser(user) {
        return localStorage.setItem('USER', JSON.stringify(user));
    }

    return {
        addMediaToPerfil: _addMediaToPerfil,
        addMediaToWatchlist: _addMediaToWatchlist,
        getListOfPerfil : _getListOfPerfil, 
        getListOfWatchlist : _getListOfWatchlist
    }

})