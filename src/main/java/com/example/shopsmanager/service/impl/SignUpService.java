package com.example.shopsmanager.service.impl;

import com.example.shopsmanager.config.converter.UserConverter;
import com.example.shopsmanager.dto.SignUpDTO;
import com.example.shopsmanager.model.UserModel;
import com.example.shopsmanager.repository.UserRepository;
import com.example.shopsmanager.service.iUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignUpService implements iUserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserConverter userConverter;
    @Override
    public SignUpDTO save(SignUpDTO userDTO) {
        UserModel userModel = new UserModel();
        userModel = userConverter.toModel(userDTO);
        userModel = userRepository.save(userModel);
        return userDTO;
    }
}
