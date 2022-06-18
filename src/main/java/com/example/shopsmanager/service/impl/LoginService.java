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

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

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
            List<ShopModel> shops = shopRepository.findByUserId(user.getUserId());
            List<Long> listShopId = new ArrayList<>();
            List<Integer> listShopState = new ArrayList<>();
            responseLoginSuccessDTO.setRole(role.getRoleName());
            for(ShopModel shop: shops){
                Long id = shop.getShopId();
                int state = shop.getState();
                listShopId.add(id);
                listShopState.add(state);
            }

            responseLoginSuccessDTO.setShopId(listShopId);
            responseLoginSuccessDTO.setUserId(user.getUserId());
            responseLoginSuccessDTO.setStateShop(listShopState);
            responseLoginSuccessDTO.setStateUser(user.getState());

            long datetime = System.currentTimeMillis();
            Timestamp timestamp = new Timestamp(datetime);
            user.setLastLogin(timestamp);
            userRepository.save(user);
            return responseLoginSuccessDTO;
        } else {
            ResponseDTO response = new ResponseDTO();
            response.setStatus("Error");
            response.setMsg("Password not right!!!");
            return response;
        }
    }
}
