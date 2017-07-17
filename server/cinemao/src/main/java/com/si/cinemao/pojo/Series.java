package com.si.cinemao.pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Configurable;

import javax.persistence.*;

/**
 * Created by sampaio on 11/07/17.
 */
@Entity
@Table(name = "SERIES_TABLE")
public class Series {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;

    @Column(name = "userId")
    private Long userId;

    @Column(name = "imdbID")
    private String imdbID;

    public Series(Long userId, String imdb){
        this.userId = userId;
        this.imdbID = imdb;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    Series(){}

}
