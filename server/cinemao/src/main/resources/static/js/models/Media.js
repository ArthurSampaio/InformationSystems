/**
 * Represents a media entity
 */
class Media {

    constructor(movie) {

        const POSTER_NOT_FOUND = "http://www.makeupstudio.lu/html/images/poster/no_poster_available.jpg";


        this.title = movie.Title;
        if (movie.Poster === "N/A") {
            this.poster = POSTER_NOT_FOUND; 
        }else{
            this.poster = movie.Poster; 
        }
        this.imdbRating = movie.imdbRating;
        this.rated = undefined;
        this.runtime = movie.Runtime;
        this.genre = movie.Genre;
        this.type = movie.Type;
        this.plot = movie.Plot;
        this.released = movie.Released;
        this.awards = movie.Awards;
        this.imdbVotes = movie.imdbVotes
        this.imdbID = movie.imdbID;
        this.lastCommentary = movie.lastCommentary;



    }


}