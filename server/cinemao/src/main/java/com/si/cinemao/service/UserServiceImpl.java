package com.si.cinemao.service;

import com.si.cinemao.pojo.Series;
import com.si.cinemao.pojo.User;
import com.si.cinemao.pojo.UserForm;
import com.si.cinemao.repositories.UserRepository;
import com.si.cinemao.service.factory.UserFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Created by sampaio on 13/07/17.
 */
@Service
@Configurable
public class UserServiceImpl implements UserService {


    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(UserForm userForm) {

        User user = UserFactory.create(userForm);

        return userRepository.save(user);

    }

    @Override
    public Collection<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserByID(Long id) {
        return userRepository.findOne(id);
    }

    @Override
    public Collection<Series> getSeriesInUserPerfil(Long id) {
        User user = userRepository.findOne(id);

        return user.getSeries();

    }

    @Override
    public Collection<Series> getSeriesInUserWatchlist(Long id) {
        User user = userRepository.findOne(id);

        return user.getWatchlist();

    }
}
