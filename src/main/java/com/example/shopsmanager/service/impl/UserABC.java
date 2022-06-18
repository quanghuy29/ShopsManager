package com.example.shopsmanager.service.impl;

import com.example.shopsmanager.dto.SignUpDTO;
import com.example.shopsmanager.dto.UserDTO;
import com.example.shopsmanager.service.iUserService;

import java.util.List;

public class UserABC implements iUserService {
    @Override
    public SignUpDTO save(SignUpDTO userDTO) {
        return null;
    }

    @Override
    public UserDTO findOneById(Long id) {
        return null;
    }

    @Override
    public List<UserDTO> findAll() {
        return null;
    }
}
