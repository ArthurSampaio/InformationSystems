class User {

    constructor(watch, perfil) {

        if (watch === undefined) {
            this._watchlist = []
        } else {
            this._watchlist = watch;
        }

        if (perfil === undefined) {
            this._perfil = []
        } else {
            this._perfil = perfil;
        }


    }

    addWatchlist(movie) {

        let out = false;
        const exist = this._watchlist.map((item) => {
            return item.imdbID
        });
        if (exist.indexOf(movie.imdbID) === -1) {
            this._watchlist.unshift(movie);
            out = true;
        }
        return out;
    }

    addPerfil(movie) {

        let out = false;
        const exist = this._perfil.map((item) => {
            return item.imdbID
        });
        if (exist.indexOf(movie.imdbID) === -1) {
            this._perfil.unshift(movie);
            out = true;
        }
        return out;

    }


    removeWatchlist(movie) {
        this._watchlist = this._watchlist.filter((media) => {
            return media.title !== movie.title;
        })
    }

    removePerfil(movie) {
        
        let out = false;
        const exist = this._perfil.map((item) => {
            return item.imdbID
        });
        if (exist.indexOf(movie.imdbID) !== -1) {
            this._perfil = this.perfil.filter((media) => {
                return media.imdbID !== movie.imdbID;
            })
            out = true;
        }
        return out;
    }

    removeWatchlist(movie){
        let out = false;
        const exist = this._watchlist.map((item) => {
            return item.imdbID
        });
        if (exist.indexOf(movie.imdbID) !== -1) {
            this._watchlist = this._watchlist.filter((media) => {
                return media.imdbID !== movie.imdbID;
            })
            out = true;
        }
        return out;

    }

    addRatingToMedia(index, rating){
        return this._perfil[index].my_rating = rating;
    }

    get watchlist() {
        return [].concat(this._watchlist);
    }

    get perfil() {
        return [].concat(this._perfil);
    }

    addCommentToSerie(index, comment){
        if(this._perfil[index].commentaries === undefined){
            this._perfil[index].commentaries = [];
        }
        console.log(comment);
        return this._perfil[index].commentaries.push(comment);
    }


    checkIfMediaExist(media, list) {

        return list.map((item) => {
            return item.imdbID
        }).indexOf(media.imdbID);

    }


}