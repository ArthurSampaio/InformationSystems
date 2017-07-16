package com.si.cinemao.pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Created by sampaio on 11/07/17.
 */
@Entity
@Table(name = "TABLE_SERIES")
public class Series {

    @JsonIgnore
    @ManyToOne
    private User user;

    @Id
    @GeneratedValue
    private Long id;

    Series(){}

    @Column(name = "title")
    private String title;

    @Column(name = "poster")
    private String poster;

    @Column(name = "imdbRating")
    private Double imdbRating;

    @Column(name = "rated")
    private Double rated;

    @Column(name = "runtime")
    private String runtime;

    @Column(name = "genre")
    private String genre;

    @Column(name = "type")
    private String type;



    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Double getImdbRating() {
        return imdbRating;
    }

    public void setImdbRating(Double imdbRating) {
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

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
