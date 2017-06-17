class User {

    constructor(){
        this.watchlist = [];
        this.perfil = [];
    }

    addWatchlist (movie){
        this.watchlist.push(movie);
    }

    addPerfil (movie){
        this.perfil.push(movie);
    }

    removeWatchlist (movie) {
        this.watchlist = this.watchlist.filter((media) => {
            media.title !== movie.title;
        })
    }

    removePerfil (movie){
        this.perfil = this.perfil.filter((media) => {
            media.title !== movie.title;
        })
    }

    get watchlist(){
        return [].concat(this.watchlist);
    }

    get perfil() {
        return [].concat(this.perfil);
    }


}