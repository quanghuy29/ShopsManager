package com.example.shopsmanager.config.converter;

import com.example.shopsmanager.dto.RegisterOrderDTO;
import com.example.shopsmanager.model.RegisterOrderModel;
import org.springframework.stereotype.Component;

@Component
public class RegisterOrderConverter {
    public RegisterOrderModel toModel(RegisterOrderDTO dto){
        RegisterOrderModel model = new RegisterOrderModel();
        //model.setShopId(dto.getShopName());
        model.setPaymentDate(dto.getDate());
        model.setPaymentMoney(dto.getMoney());
        return model;
    }

    public RegisterOrderDTO toDTO(RegisterOrderModel model){
        RegisterOrderDTO dto = new RegisterOrderDTO();
        dto.setId(model.getRegisterId());
        //dto.setShopName(model.getShopId());
        dto.setDate(model.getPaymentDate());
        dto.setMoney(model.getPaymentMoney());
        return dto;
    }
}
