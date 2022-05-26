package com.example.shopsmanager.service;

import com.example.shopsmanager.dto.SignUpDTO;

public interface iUserService {
    SignUpDTO save(SignUpDTO userDTO);
}
