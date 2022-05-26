package com.example.shopsmanager.repository;

import com.example.shopsmanager.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel, Long> {

}
