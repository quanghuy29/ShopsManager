package com.example.shopsmanager.converter;

import com.example.shopsmanager.dto.ShopDTO;
import com.example.shopsmanager.model.ShopModel;
import org.springframework.stereotype.Component;

@Component
public class ShopConverter {
    public ShopModel toModel(ShopDTO dto){
        ShopModel model = new ShopModel();
        model.setShopName(dto.getShopName());
        model.setUserId(dto.getUserID());
        model.setWebsite(dto.getWebsite());
        model.setAddress(dto.getAddress());
        model.setDetail(dto.getDetail());
        model.setPhone(dto.getPhone());
        model.setEmail(dto.getEmail());
        model.setState(dto.getState());
        model.setCreatedDay(dto.getCreatedDay());
        model.setLastRegisterDay(dto.getLastRegisterDay());
        model.setExpirationDay(dto.getExpirationDay());
        return model;
    }
    public ShopDTO toDTO(ShopModel model){
        ShopDTO dto = new ShopDTO();
        dto.setShopId(model.getShopId());
        dto.setShopName(model.getShopName());
        dto.setUserID(model.getUserId());
        dto.setWebsite(model.getWebsite());
        dto.setAddress(model.getAddress());
        dto.setDetail(model.getDetail());
        dto.setPhone(model.getPhone());
        dto.setEmail(model.getEmail());
        dto.setState(model.getState());
        dto.setCreatedDay(model.getCreatedDay());
        dto.setLastRegisterDay(model.getLastRegisterDay());
        dto.setExpirationDay(model.getExpirationDay());
        //listOrder
        //listCustomer
        return dto;
    }
}
