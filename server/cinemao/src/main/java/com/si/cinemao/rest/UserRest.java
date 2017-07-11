package com.si.cinemao.rest;

import com.si.cinemao.pojo.User;
import com.si.cinemao.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by sampaio on 11/07/17.
 */
@RestController
@RequestMapping("/user")
public class UserRest {

    private final UserRepository userRepository;

    @Autowired
    UserRest(UserRepository userRepo){
        this.userRepository = userRepo;
    }

    @RequestMapping(method = RequestMethod.GET)
    List<User> findAl(){
        List<User> users = userRepository.findAll();
        return users;
    }

    @RequestMapping(method = RequestMethod.POST)
    User add(@RequestBody User user){
        User userCheck = userRepository.save(user);
        return userCheck;
    }
}
