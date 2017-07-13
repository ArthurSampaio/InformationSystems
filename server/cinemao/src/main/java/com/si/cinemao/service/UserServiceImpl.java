package com.si.cinemao.service;

import com.si.cinemao.pojo.User;
import com.si.cinemao.pojo.UserForm;
import com.si.cinemao.repositories.UserRepository;
import com.si.cinemao.service.factory.UserFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

import java.util.Collection;

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
}
