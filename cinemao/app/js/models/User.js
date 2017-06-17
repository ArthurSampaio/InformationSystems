class User {

    constructor() {
        this.watchlist = [];
        this.perfil = [];
    }

    addWatchlist(movie) {
        let out = false;
        if (_checkIfMediaExist(movie, this.watchlist) === -1) {
            this.watchlist.push(movie);
            out = true;
        }
        return out;
    }

    addPerfil(movie) {
        let out = false;
        if (_checkIfMediaExist(movie, this.perfil) === -1) {
            this.perfil.push(movie);
            out = true;
        }
        return out;

    }

    removeWatchlist(movie) {
        this.watchlist = this.watchlist.filter((media) => {
            return media.title !== movie.title;
        })
    }

    removePerfil(movie) {
        let out = false;
        if (_checkIfMediaExist(movie, this.perfil) !== -1) {
            this.perfil = this.perfil.filter((media) => {
                return media.title !== movie.title;
            })
            out = true;
        }
        return out;
    }


    get watchlist() {
        return [].concat(this.watchlist);
    }

    get perfil() {
        return [].concat(this.perfil);
    }

    /**
     * Checks if a given media exist in list
     * @param {*} media 
     * @param {*} list 
     */
    _checkIfMediaExist(media, list) {

        return list.map((item) => {
            item.imdbID
        }).indexOf(media.imdbID);

    }


}