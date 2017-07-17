package com.si.cinemao.pojo;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;

/**
 * Created by sampaio on 17/07/17.
 */
public class SeriesForm {

    @NotNull
    @NotEmpty
    private String imdbID;

    @NotNull
    @NotEmpty
    private Long userId;


    private String title;
    private String poster;
    private String imdbRating;
    private Double rated;
    private String runtime;
    private String plot;
    private String genre;
    private String imdbVotes;
    private String released;
    private String awards;
    private String type;
    private String inList;

    public String getInList() {
        return inList;
    }

    public void setInList(String inList) {
        this.inList = inList;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getImdbRating() {
        return imdbRating;
    }

    public void setImdbRating(String imdbRating) {
        this.imdbRating = imdbRating;
    }

    public Double getRated() {
        return rated;
    }

    public void setRated(Double rated) {
        this.rated = rated;
    }

    public String getRuntime() {
        return runtime;
    }

    public void setRuntime(String runtime) {
        this.runtime = runtime;
    }

    public String getPlot() {
        return plot;
    }

    public void setPlot(String plot) {
        this.plot = plot;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getImdbVotes() {
        return imdbVotes;
    }

    public void setImdbVotes(String imdbVotes) {
        this.imdbVotes = imdbVotes;
    }

    public String getReleased() {
        return released;
    }

    public void setReleased(String released) {
        this.released = released;
    }

    public String getAwards() {
        return awards;
    }

    public void setAwards(String awards) {
        this.awards = awards;
    }


    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getImdbID() {
        return imdbID;
    }

    public void setImdbID(String imdbID) {
        this.imdbID = imdbID;
    }


}
