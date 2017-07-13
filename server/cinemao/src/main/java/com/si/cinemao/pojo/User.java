package com.si.cinemao.pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.annotation.Generated;
import javax.persistence.*;
import javax.print.DocFlavor;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by sampaio on 11/07/17.
 */
@Entity
@Table(name = "TABLE_USER")
public class User {

    @OneToMany(mappedBy = "user")
    private Set<Series> series = new HashSet();
    @OneToMany(mappedBy = "user")
    private Set<Series> watchlist = new HashSet();

    @Id
    @GeneratedValue
    private Long id;


    @NotNull
    @Column(name = "username")
    private String username;

    @NotNull
    @Column(name = "password")
    private String password;

    @NotNull
    @Column(name = "email")
    private String email;

    User(){}

    public User(String username, String password, String email) {
        this.series = new HashSet<>();
        this.watchlist = new HashSet<>();
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public Set<Series> getSeries() {
        return series;
    }

    public void setSeries(Set<Series> series) {
        this.series = series;
    }

    public Long getId() {
        return id;
    }


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Series> getWatwchlist() {
        return watchlist;
    }

    public void setWatchlist(Set<Series> watchlist) {
        this.watchlist = watchlist;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        User user = (User) o;

        if (username != null ? !username.equals(user.username) : user.username != null) return false;
        if (password != null ? !password.equals(user.password) : user.password != null) return false;
        return email != null ? email.equals(user.email) : user.email == null;
    }

    @Override
    public int hashCode() {
        int result = username != null ? username.hashCode() : 0;
        result = 31 * result + (password != null ? password.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        return result;
    }
}
