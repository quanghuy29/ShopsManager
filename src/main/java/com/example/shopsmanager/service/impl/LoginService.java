package com.example.shopsmanager.service.impl;

import com.example.shopsmanager.dto.LoginDTO;
import com.example.shopsmanager.dto.ResponseDTO;
import com.example.shopsmanager.dto.ResponseLoginSuccessDTO;
import com.example.shopsmanager.model.RoleModel;
import com.example.shopsmanager.model.ShopModel;
import com.example.shopsmanager.model.UserModel;
import com.example.shopsmanager.repository.RoleRepository;
import com.example.shopsmanager.repository.ShopRepository;
import com.example.shopsmanager.repository.UserRepository;
import com.example.shopsmanager.service.iLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService implements iLoginService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private ShopRepository shopRepository;
    @Override
    public Object checkLogin(LoginDTO dto) {
        if (dto.getPhoneNumber() != null){
            UserModel user = userRepository.findByPhone(dto.getPhoneNumber());
            if (user == null){
                ResponseDTO response = new ResponseDTO();
                response.setStatus("Error");
                response.setMsg("Not found user!!!");
                return response;
            }
            return checkPassword(user, dto);
        }
        else if (dto.getEmail() != null) {
            UserModel user = userRepository.findByEmail(dto.getEmail());
            if (user == null){
                ResponseDTO response = new ResponseDTO();
                response.setStatus("Error");
                response.setMsg("Not found user!!!");
                return response;
            }
            return checkPassword(user, dto);
        }
        else {
            ResponseDTO response = new ResponseDTO();
            response.setStatus("Error");
            response.setMsg("Not found user!!!");
            return response;
        }
    }

    private Object checkPassword(UserModel user, LoginDTO dto){
        if (dto.getPassword().equals(user.getPassword())){
            ResponseLoginSuccessDTO responseLoginSuccessDTO = new ResponseLoginSuccessDTO();
            RoleModel role = roleRepository.getById(user.getRoleId());
            ShopModel shop = shopRepository.findByUserId(user.getUserId());
            responseLoginSuccessDTO.setRole(role.getRoleName());
            responseLoginSuccessDTO.setShopId(shop.getShopId());
            responseLoginSuccessDTO.setUserId(user.getUserId());
            responseLoginSuccessDTO.setStateShop(shop.getState());
            responseLoginSuccessDTO.setStateUser(user.getState());
            return responseLoginSuccessDTO;
        } else {
            ResponseDTO response = new ResponseDTO();
            response.setStatus("Error");
            response.setMsg("Password not right!!!");
            return response;
        }
    }
}
