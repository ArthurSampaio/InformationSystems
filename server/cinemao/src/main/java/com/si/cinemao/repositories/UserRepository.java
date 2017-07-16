package com.si.cinemao.repositories;

import com.si.cinemao.pojo.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;


/**
 * Created by sampaio on 11/07/17.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("select u from User u where u.email = ?1")
    User findByEmail(String email);

    User findByEmailAndPassword(String email, String Password);


}
