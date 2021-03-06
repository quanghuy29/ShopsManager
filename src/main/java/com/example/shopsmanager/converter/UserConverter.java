package com.example.shopsmanager.converter;

import com.example.shopsmanager.dto.SignUpDTO;
import com.example.shopsmanager.dto.UserDTO;
import com.example.shopsmanager.model.ShopModel;
import com.example.shopsmanager.model.UserModel;
import com.example.shopsmanager.repository.RoleRepository;
import com.example.shopsmanager.repository.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserConverter {
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private ShopRepository shopRepository;

    public UserModel toModel(SignUpDTO userDTO){
        UserModel userModel = new UserModel();
        userModel.setFirstName(userDTO.getFirstName());
        userModel.setLastName(userDTO.getLastName());
        userModel.setEmail(userDTO.getEmail());
        userModel.setPhone(userDTO.getPhone());
        userModel.setPassword(userDTO.getPassword());
        userModel.setRoleId(roleRepository.findByCode(userDTO.getRoleCode()).getRoleId());
        return userModel;
    }

    public SignUpDTO toDTO(UserModel model){
        SignUpDTO dto = new SignUpDTO();
        dto.setUserId(model.getUserId());
        dto.setFirstName(model.getFirstName());
        dto.setLastName(model.getLastName());
        dto.setEmail(model.getEmail());
        dto.setPhone(model.getPhone());
        dto.setPassword(model.getPassword());
        dto.setRoleCode(roleRepository.getById(model.getRoleId()).getCode());
        return dto;
    }

    public UserDTO toUserDTO(UserModel model){
        UserDTO dto = new UserDTO();
        dto.setUserId(model.getUserId());
        dto.setFirstName(model.getFirstName());
        dto.setLastName(model.getLastName());
        dto.setPhone(model.getPhone());
        dto.setEmail(model.getEmail());
        dto.setLastLogin(model.getLastLogin());
        dto.setCreatedDate(model.getCreatedDate());
        dto.setPassword(model.getPassword());
        dto.setStateUser(model.getState());
        dto.setRole(roleRepository.getById(model.getRoleId()).getRoleName());

        List<ShopModel> shopList = shopRepository.findByUserId(model.getUserId());
        List<Long> listShopId = new ArrayList<>();
        List<Integer> listShopState = new ArrayList<>();

        for(ShopModel shop: shopList){
            Long id = shop.getShopId();
            int state = shop.getState();
            listShopId.add(id);
            listShopState.add(state);
        }

        dto.setShopId(listShopId);
        dto.setStateShop(listShopState);

        return dto;
    }

    public UserModel toUserModel(UserDTO dto, UserModel oldModel){
        oldModel.setFirstName(dto.getFirstName());
        oldModel.setLastName(dto.getLastName());
        oldModel.setPhone(dto.getPhone());
        oldModel.setEmail(dto.getEmail());
        oldModel.setState(dto.getStateUser());
        oldModel.setPassword(dto.getPassword());
        return oldModel;
    }

    public UserModel toUserModel(UserDTO dto){
        UserModel model = new UserModel();
        model.setFirstName(dto.getFirstName());
        model.setLastName(dto.getLastName());
        model.setPhone(dto.getPhone());
        model.setEmail(dto.getEmail());
        model.setState(dto.getStateUser());
        model.setPassword(dto.getPassword());
        return model;
    }
}
