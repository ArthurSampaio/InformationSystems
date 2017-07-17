package com.si.cinemao.rest;

import com.si.cinemao.pojo.User;
import com.si.cinemao.pojo.UserForm;
import com.si.cinemao.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Created by sampaio on 11/07/17.
 */
@RestController
@RequestMapping("/user")
public class UserRest {

    @Autowired
    private UserService userService;


    @RequestMapping(method = RequestMethod.POST, value = "/create")
    public ResponseEntity<User> registerUser (@RequestBody UserForm userform) {

        User user = userService.createUser(userform);

        return (user != null) ? ResponseEntity.ok(user) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);

    }



    @RequestMapping(method = RequestMethod.POST, value = "/update")
    public ResponseEntity<User> updateUser(@RequestBody User user){

        User userSaved = userService.updateUser(user);

        return (userSaved != null) ? ResponseEntity.ok(userSaved) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);

    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Collection<User>> getAllRegisterUsers() {

        Collection<User> users = userService.getAllUsers();

        return new ResponseEntity<>(users, HttpStatus.OK);

    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public ResponseEntity<User> getUserById (@PathVariable Long id){

        User user = userService.getUserByID(id);
        ResponseEntity response;
        if(user == null){
            response =  new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        response = new ResponseEntity<>(user, HttpStatus.OK);

        return response;

    }
    

    @RequestMapping(method  = RequestMethod.POST, value = "/login")
    public ResponseEntity<User> makeLogin (@RequestBody UserForm user){

        User userChecked = userService.login(user);
        ResponseEntity<User> response;

        if(user == null){
            response = new ResponseEntity<User>(HttpStatus.UNAUTHORIZED);
        }else{
            response = new ResponseEntity(userChecked, HttpStatus.OK);
        }

        return response;

    }


}
