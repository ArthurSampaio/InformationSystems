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
