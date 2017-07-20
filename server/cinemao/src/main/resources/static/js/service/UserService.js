
/**
 * Represent the main logica business. 
 */
angular.module('myApp').service('UserService', function ($q, $http, config, QueryService) {

    const USER_ACTUAL = "USER";
    const PERFIL = "PERFIL";
    const WATCHLIST = "WATCHLIST";


    /**
     * Cached a specific user. This helps in business logic
     */
    function load() {
        if (typeof (Storage) !== "undefined") {
            let user_cached = _getInternalUser();
            if (user_cached !== null) {
                let auxUser = JSON.parse(user_cached);
                this.user = new User(auxUser.id, auxUser._username, auxUser._email, auxUser._watchlist, auxUser._perfil);

            } else {
                this.user = new User();
            }

        } else {
            this.user = new User();
        }

        return this.user;
    };

    /**
     * Get a list of series present in Perfil
     */
    function _getListOfPerfil() {
        const user = load();

        return QueryService.seriesByUserID(user.id).then(
            function (response) {
                const series = response.data;

                let perfil = series.filter((item) => {
                    return item.inList === PERFIL;
                })
                _saveInternalUser(user);

                return perfil;
            }

        )
    }

    /**
    * Get a list of series present in Watchlist
    */
    function _getListOfWatchlist() {
        let user = load();
        return QueryService.seriesByUserID(user.id).then(
            function (response) {
                const series = response.data;

                let perfil = series.filter((item) => {
                    return item.inList === WATCHLIST;
                })
                _saveInternalUser(user);

                return perfil;
            }

        )
    }


    function _addMediaToPerfil(media) {

        return _addMediaTo(media, PERFIL);
    }

    function _addMediaToWatchlist(media) {
        console.log(media);
        return _addMediaTo(media, WATCHLIST);

    }

    /**
     * Add a specif midia in collection LIST. List can be PERFIL or WATCHLIST.
     * @param {*Array} media 
     * @param {*string} LIST 
     */
    function _addMediaTo(media, LIST) {

        return QueryService.getInfoByImdbID(media.imdbID).then(
            function (response) {
                let user = load();

                let movie = _createMovie(response.data);
                movie.inList = LIST;

                return QueryService.addSeriesToUser(user, movie).then(
                    function (response) {
                        let result;
                        if (LIST === WATCHLIST) {
                            result = user.addWatchlist(response.data);
                        }
                        if (LIST === PERFIL) {
                            result = user.addPerfil(response.data);
                        }
                        _saveInternalUser(user);
                        return true;
                    }, function (error) {
                        return false;
                    }
                )
            })

    }

    /**
     * Remove a media from perfil;
     * @param {*Media} media 
     */
    function _removeMediaFromPerfil(media) {

        return QueryService.deleteSeriesByID(media.id).then(
            function (response) {
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
        )

    }

    /**
     * Add Media from watchlist to perfil
     * @param {Media} movie 
     */
    function _addMediaFromWatchlistToPerfil(movie) {

        const media = angular.copy(movie);
        media.inList = PERFIL;
        console.log(media.inList);
        return QueryService.updateSeries(media).then(
            function (response) {
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
            })
    }



    /**
     * Add a rate in a serie or movie
     * @param {*Media} media 
     * @param {*String} rating 
     */
    function _addRatingToMedia(media, rating) {

        media.rated = rating;
        return QueryService.updateSeries(media).then(
            function (response) {
                let indexMedia = _isValidInPerfil(media)
                if (indexMedia != -1) {
                    let user = load();
                    const result = user.addRatingToMedia(indexMedia, rating) !== null;
                    _saveInternalUser(user);

                    return $q(function (resolve, reject) {
                        if (result) {
                            _saveInternalUser(user)
                            resolve({ 'response': true });
                        } else {
                            resolve({ 'response': false });
                        }
                    });
                }
            }
        )
    }

    /**
     * Add comments to a unique serie
     * @param {Media} serie 
     * @param {String} comment 
     */
    function _addCommentToSerie(serie, comment) {

        serie.lastComentary = angular.copy(comment);

        return QueryService.updateSeries(serie).then(
            function (response) {
                console.log(response.data);
                let user = load();
                user.addCommentToSerie(_isValidInPerfil(serie), comment);
                _saveInternalUser(user);

                return $q(function (resolve, reject) {

                    _saveInternalUser(user)
                    resolve({ 'response': true });

                });
            }
        )

    }

    /**
     * Check if a media is valid in this perfil
     * @param {*Media} serie 
     */
    function _isValidInPerfil(serie) {
        let user = load();
        let indexMedia = user.perfil.map((item) => {
            return item.imdbID;
        }).indexOf(serie.imdbID);
        return indexMedia;
    }



    function _getInternalUser() {

        return localStorage.getItem(USER_ACTUAL);
    }

    function _saveInternalUser(user) {

        return localStorage.setItem('USER', JSON.stringify(user));

    }



    function _createMovie(movie) {
        return new Media(movie);
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



    }

})