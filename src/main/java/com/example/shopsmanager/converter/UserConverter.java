package com.example.shopsmanager.converter;

import com.example.shopsmanager.dto.SignUpDTO;
import com.example.shopsmanager.model.UserModel;
import org.springframework.stereotype.Component;

@Component
public class UserConverter {
    public UserModel toModel(SignUpDTO userDTO){
        UserModel userModel = new UserModel();
        userModel.setFirstName(userDTO.getFirstName());
        userModel.setLastName(userDTO.getLastname());
        userModel.setEmail(userDTO.getEmail());
        userModel.setPhone(userDTO.getPhone());
        userModel.setPassword(userDTO.getPassword());
        return userModel;
    }
}
