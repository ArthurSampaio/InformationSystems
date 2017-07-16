package com.si.cinemao.service;

import com.si.cinemao.exception.CinemaoRuntimeError;
import com.si.cinemao.exception.RegisteredUserException;
import com.si.cinemao.exception.UserNotFoundException;
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

    private static final String USER_NOT_FOUND_WRONG = "User not found. Email or password are incorrect.";

    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(UserForm userForm) {


        if(this.existUser(userForm.getEmail())){
            throw new RegisteredUserException();
        }

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
        User user = validUser(id);
        return user.getSeries();

    }

    @Override
    public Collection<Series> getSeriesInUserWatchlist(Long id) {
        User user = validUser(id);
        return user.getWatchlist();


    }

    @Override
    public User login(UserForm user) {
        User userDB = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword()).get();
        return userDB;

    }

    private boolean existUser(String email){

        User user = userRepository.findByEmail(email).get();
        boolean response = false;
        if (user != null) response = true;
        return response;

    }

    /**
     * Verifica se um dado id existe no repositório. Retornando uma instância válida ou lançando uma
     * RuntimeException.
     * @param id
     *      Id do usuário
     * @return
     *      Uma instância de user;
     */
    private User validUser (Long id){

        User user = userRepository.findOne(id);

        if(user == null){
            throw new UserNotFoundException("User not found");
        }else{
            return user;
        }

    }
}
