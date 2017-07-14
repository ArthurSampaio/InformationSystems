package com.si.cinemao.rest;

import ch.qos.logback.core.net.SyslogOutputStream;
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
    public ResponseEntity<User> registerUser (@RequestBody UserForm userform) {

        User user = userService.createUser(userform);

        return (user != null) ? ResponseEntity.ok(user) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);


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
        response = new ResponseEntity<User>(user, HttpStatus.OK);

        return response;

    }
    
    @RequestMapping(method = RequestMethod.GET, value = "/perfil/{id}")
    public ResponseEntity<Collection<Series>> getSeriesInPerfilFromUserID (@PathVariable Long id){
        
        Collection<Series> seriesInPerfil =  userService.getSeriesInUserPerfil(id);

        return new ResponseEntity<Collection<Series>>(seriesInPerfil, HttpStatus.OK);

    }





}
