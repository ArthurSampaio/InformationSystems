angular.module('myApp').service('UserService', function ($q, $http, config, QueryService) {

    const USER_ACTUAL = "USER";
    const PERFIL = "PERFIL";
    const WATCHLIST = "WATCHLIST";


    function load() {
        if (typeof (Storage) !== "undefined") {
            let user_cached = _getInternalUser();
            if (user_cached !== null) {
                let auxUser = JSON.parse(user_cached);
                console.log(auxUser);
                this.user = new User(auxUser.id, auxUser._username, auxUser._email, auxUser._watchlist, auxUser._perfil);

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

        return QueryService.getInfoByImdbID(media.imdbID).then(
            function (response) {
                let user = load();


                let movie = _createMovie(response.data);
                movie.inList = PERFIL;
                const result = user.addPerfil(movie);


                _saveInternalUser(user);
                return QueryService.addSeriesToUser(user, movie).then(
                    function (response) {
                        return true;
                    }, function (error) {
                        return false;
                    }
                )
            })
    }

    function _addMediaToWatchlist(media) {
        return QueryService.getInfoByImdbID(media.imdbID).then(
            function (response) {
                let user = load();
                console.log(user);

                let movie = _createMovie(response.data);
                movie.inList = WATCHLIST;
                const result = user.addWatchlist(movie);

                _saveInternalUser(user);
                return QueryService.addSeriesToUser(user, movie).then(
                    function (response) {
                        return true;
                    }, function (error) {
                        return false;
                    }
                )
            })

    }

    function _removeMediaFromPerfil(media) {
        let user = load();
        const result = user.removePerfil(angular.copy(media));
        return $q(function (resolve, reject) {
            if (result) {
                _saveInternalUser(user)
                resolve({ 'response': true });
            } else {
                resolve({ 'response': false });
            }
        });

    }

    function _removeMediaFromWatchlist(media) {
        let user = load();
        const result = user.removeWatchlist(angular.copy(media));
        return $q(function (resolve, reject) {
            if (result) {
                _saveInternalUser(user)
                resolve({ 'response': true });
            } else {
                resolve({ 'response': false });
            }
        });

    }

    function _addRatingToMedia(media, rating) {

        let user = load();
        let indexMedia = user.perfil.map((item) => {
            return item.imdbID;
        }).indexOf(media.imdbID);

        if (indexMedia !== -1) {
            user.addRatingToMedia(indexMedia, rating);
        }
        return $q(function (resolve) {
            _saveInternalUser(user)
            resolve({ 'response': true });
        })
    }

    function _addCommentToSerie(serie, comment) {
        let user = load();
        let indexMedia = user.perfil.map((item) => {
            return item.imdbID;
        }).indexOf(serie.imdbID);

        if (indexMedia !== -1) {
            user.addCommentToSerie(indexMedia, comment);
        }
        return $q(function (resolve) {
            _saveInternalUser(user);
            resolve({ 'response': true });
        });

    }


    function _getInternalUser() {

        return localStorage.getItem(USER_ACTUAL);
    }

    function _saveInternalUser(user) {


        return localStorage.setItem('USER', JSON.stringify(user));

    }


    function _addMediaFromWatchlistToPerfil(media) {

        _addMediaToPerfil(media);
        return _removeMediaFromWatchlist(media);

    }

    function _login(email, password) {

        return QueryService.makeLogin(email, password).then(
            function (response) {
                const data = response.data;

                //TODO: colocar os valores no user atual. 
                return _takeAttrUser(data);

                    }
                )
            
        
    }

    function _takeAttrUser(data) {
        return QueryService.seriesByUserID(data.id).then(
            function (response) {
                const series = response.data;

                let perfil = series.filter((item) => {
                    return item.inList == PERFIL;
                })
                let watchlist = series.filter((item) => {
                    return item.inList == WATCHLIST;
                })

                const user = new User(data.id, data.username, data.email, watchlist, perfil)

                _saveInternalUser(user);
                return user;

            }
        )

    }

    function _createMovie(movie) {
        return new Media(movie);
    }


    function _makeUser(user) {

        const out = { "username": user.username, "email": user.email, "watchlist": user.watchlist, "series": user.perfil }
        return out;
    }





    return {

        addMediaToPerfil: _addMediaToPerfil,
        addMediaToWatchlist: _addMediaToWatchlist,
        getListOfPerfil: _getListOfPerfil,
        getListOfWatchlist: _getListOfWatchlist,
        removeMediaFromPerfil: _removeMediaFromPerfil,
        addMediaFromWatchlistToPerfil: _addMediaFromWatchlistToPerfil,
        addRatingToMedia: _addRatingToMedia,
        addCommentToSerie: _addCommentToSerie,
        login: _login,


    }

})