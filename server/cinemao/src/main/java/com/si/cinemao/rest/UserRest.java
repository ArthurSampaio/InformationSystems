package com.si.cinemao.rest;

import com.si.cinemao.pojo.Series;
import com.si.cinemao.pojo.User;
import com.si.cinemao.pojo.UserForm;
import com.si.cinemao.repositories.SeriesRepository;
import com.si.cinemao.repositories.UserRepository;
import com.si.cinemao.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.Collection;
import java.util.List;
import java.util.Set;

/**
 * Created by sampaio on 11/07/17.
 */
@RestController
@RequestMapping("/user")
public class UserRest {


    @Autowired
    private UserService userService;



    @RequestMapping(method = RequestMethod.POST, value = "/create")
    public ResponseEntity<User> createUser (@RequestBody UserForm userform) {

        User user = userService.createUser(userform);

        return (user != null) ? ResponseEntity.ok(user) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        //TODO: 1 - create user through a service
        //Return a response entity

    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Collection<User>> getAllRegisterUsers() {

        Collection<User> users = userService.getAllUsers();

        return new ResponseEntity<>(users, HttpStatus.OK);

    }



}
