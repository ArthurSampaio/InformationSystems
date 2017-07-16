package com.si.cinemao.service.factory;

import com.si.cinemao.pojo.User;
import com.si.cinemao.pojo.UserForm;

/**
 * Created by sampaio on 13/07/17.
 */
public class UserFactory {

    public static User create(UserForm user){

        User out = new User(user.getUsername(), user.getPassword(), user.getEmail() );

        return out;

    }
}
