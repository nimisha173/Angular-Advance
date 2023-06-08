package com.ust.UserLogin.repository;

import com.ust.UserLogin.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String> {

}
