package com.example.shopsmanager.converter;

import com.example.shopsmanager.dto.ShopDTO;
import com.example.shopsmanager.model.ShopModel;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;

@Component
public class ShopConverter {
    public ShopModel toModel(ShopDTO dto){
        ShopModel model = new ShopModel();
        model.setShopName(dto.getShopName());
        model.setUserId(dto.getUserID());
        if (dto.getWebsite() != null)
            model.setWebsite(dto.getWebsite());
        model.setAddress(dto.getAddress());
        if (dto.getDetail() != null)
            model.setDetail(dto.getDetail());
        model.setPhone(dto.getPhone());
        model.setEmail(dto.getEmail());
        model.setState(dto.getState());
        if (dto.getCreatedDay() != null)
            model.setCreatedDay(dto.getCreatedDay());
        else {
            long datetime = System.currentTimeMillis();
            Timestamp timestamp = new Timestamp(datetime);
            model.setCreatedDay(timestamp);
        }
        if (dto.getLastRegisterDay() != null)
            model.setLastRegisterDay(dto.getLastRegisterDay());
        if (dto.getExpirationDay() != null)
            model.setExpirationDay(dto.getExpirationDay());
        return model;
    }
    public ShopDTO toDTO(ShopModel model){
        ShopDTO dto = new ShopDTO();
        dto.setShopId(model.getShopId());
        dto.setShopName(model.getShopName());
        dto.setUserID(model.getUserId());
        if (model.getWebsite() != null)
            dto.setWebsite(model.getWebsite());
        dto.setAddress(model.getAddress());
        if (model.getDetail() != null)
            dto.setDetail(model.getDetail());
        dto.setPhone(model.getPhone());
        dto.setEmail(model.getEmail());
        dto.setState(model.getState());
        dto.setCreatedDay(model.getCreatedDay());
        if (model.getLastRegisterDay() != null)
            dto.setLastRegisterDay(model.getLastRegisterDay());
        if (model.getExpirationDay() != null)
            dto.setExpirationDay(model.getExpirationDay());
        return dto;
    }
    public ShopModel toModel(ShopDTO dto, ShopModel model){
        model.setShopName(dto.getShopName());
        model.setUserId(dto.getUserID());
        if (dto.getWebsite() != null)
            model.setWebsite(dto.getWebsite());
        model.setAddress(dto.getAddress());
        if (dto.getDetail() != null)
            model.setDetail(dto.getDetail());
        model.setPhone(dto.getPhone());
        model.setEmail(dto.getEmail());
        model.setState(dto.getState());
        if (dto.getCreatedDay() != null)
            model.setCreatedDay(dto.getCreatedDay());
        else {
            long datetime = System.currentTimeMillis();
            Timestamp timestamp = new Timestamp(datetime);
            model.setCreatedDay(timestamp);
        }
        if (dto.getLastRegisterDay() != null)
            model.setLastRegisterDay(dto.getLastRegisterDay());
        if (dto.getExpirationDay() != null)
            model.setExpirationDay(dto.getExpirationDay());
        return model;
    }
}
