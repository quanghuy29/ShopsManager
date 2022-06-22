package com.example.shopsmanager.service.impl;

import com.example.shopsmanager.converter.UserConverter;
import com.example.shopsmanager.dto.SignUpDTO;
import com.example.shopsmanager.dto.UserDTO;
import com.example.shopsmanager.model.UserModel;
import com.example.shopsmanager.repository.UserRepository;
import com.example.shopsmanager.service.iUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements iUserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserConverter userConverter;

    @Override
    public SignUpDTO save(SignUpDTO userDTO) {
        UserModel userModel = new UserModel();
        userModel = userConverter.toModel(userDTO);

        long datetime = System.currentTimeMillis();
        Timestamp timestamp = new Timestamp(datetime);
        userModel.setCreatedDate(timestamp);

        userModel = userRepository.save(userModel);
        return userConverter.toDTO(userModel);
    }

    @Override
    public UserDTO findOneById(Long id) {
        if (userRepository.findById(id).isPresent()){
            UserModel model = userRepository.findById(id).get();
            return userConverter.toUserDTO(model);
        }
        return null;
    }

    @Override
    public List<UserDTO> findAll() {
        List<UserDTO> listDTO = new ArrayList<>();
        List<UserModel> listModel = userRepository.findAll();
        for(UserModel item: listModel){
            UserDTO dto = userConverter.toUserDTO(item);
            listDTO.add(dto);
        }
        return listDTO;
    }
}
