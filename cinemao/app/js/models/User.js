class User {

    constructor(watch, perfil) {
        if(watch === undefined){
            this._watchlist = []
        }else{
            this._watchlist = watch;
        }
        
        if(perfil === undefined){
             this._perfil = []
        }else{
            this._perfil = perfil;
        }

       
    }

    addWatchlist(movie) {
        let out = false;

        if (checkIfMediaExist(movie, this._watchlist) === -1) {
            this._watchlist.push(movie);
            out = true;
        }
        return out;
    }

    addPerfil(movie) {

        let out = false;
        const exist = this._perfil.map((item) => {
           return item.imdbID
        }).indexOf(movie.imdb);
        

        if (exist === -1) {
            this._perfil.push(movie);
            out = true;
        }
        console.log(this._perfil);
        return out;

    }

    removeWatchlist(movie) {
        this._watchlist = this._watchlist.filter((media) => {
            return media.title !== movie.title;
        })
    }

    removePerfil(movie) {
        let out = false;
        if (checkIfMediaExist(movie, this._perfil) !== -1) {
            this._perfil = this.perfil.filter((media) => {
                return media.title !== movie.title;
            })
            out = true;
        }
        return out;
    }


    get watchlist() {
        return [].concat(this._watchlist);
    }

    get perfil() {
        return [].concat(this._perfil);
    }

   
   checkIfMediaExist(media, list) {

        return list.map((item) => {
            item.imdbID
        }).indexOf(media.imdbID);

    }


}