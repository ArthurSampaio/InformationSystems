/**
 * Represents the entity user;
 */
class User {

    constructor(id, username, email, watch, perfil) {

        if (id === undefined) {
            this.id = ""
        } else {
            this.id = id;
        }

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
        if (username === undefined) {
            this._username = "";
        } else {
            this._username = username;
        }
        if (email === undefined) {
            this._email = "";
        } else {
            this._email = email;
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

    removeWatchlist(movie) {
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


    addCommentToSerie(index, comment) {
       
        
        this._perfil[index].lastComentary = comment
        console.log(this._perfil[index].lastComentary);

        return this._perfil[index].lastComentary ; 
    }


    checkIfMediaExist(media, list) {

        return list.map((item) => {
            return item.imdbID
        }).indexOf(media.imdbID);

    }


    addRatingToMedia(index, rating) {
        
        return this._perfil[index].rated = rating;
    }

    get watchlist() {
        return [].concat(this._watchlist);
    }

    get perfil() {
        return [].concat(this._perfil);
    }

    get username() {
        return this._username;
    }

    get email() {
        return this._email;
    }



}