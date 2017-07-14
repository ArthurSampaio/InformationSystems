package com.si.cinemao.repositories;

import com.si.cinemao.pojo.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


/**
 * Created by sampaio on 11/07/17.
 */
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);


}
