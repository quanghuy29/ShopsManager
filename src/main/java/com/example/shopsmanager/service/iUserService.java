package com.example.shopsmanager.service;

import com.example.shopsmanager.dto.SignUpDTO;
import com.example.shopsmanager.dto.UserDTO;

import java.util.List;

public interface iUserService {
    SignUpDTO save(SignUpDTO userDTO);
    UserDTO findOneById(Long id);
    List<UserDTO> findAll();
}
