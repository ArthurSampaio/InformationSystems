package com.si.cinemao.service;

import com.si.cinemao.pojo.Series;
import com.si.cinemao.pojo.User;
import com.si.cinemao.pojo.UserForm;

import java.util.Collection;

/**
 * Created by sampaio on 13/07/17.
 */
public interface UserService {

    User createUser (UserForm userForm);

    Collection<User> getAllUsers();

    User getUserByID (Long id);

    Collection<Series> getSeriesInUserPerfil(Long id);

    Collection<Series> getSeriesInUserWatchlist (Long id);




}
