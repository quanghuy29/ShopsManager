package com.example.shopsmanager.converter;

import com.example.shopsmanager.dto.RegisterOrderDTO;
import com.example.shopsmanager.model.RegisterOrderModel;
import org.springframework.stereotype.Component;

@Component
public class RegisterOrderConverter {
    public RegisterOrderModel toModel(RegisterOrderDTO dto){
        RegisterOrderModel model = new RegisterOrderModel();
        model.setShopId(dto.getShopId());
        model.setPaymentDate(dto.getPay_date());
        model.setPaymentMoney(dto.getPay_money());
        model.setState(dto.getState());
        return model;
    }

    public RegisterOrderDTO toDTO(RegisterOrderModel model){
        RegisterOrderDTO dto = new RegisterOrderDTO();
        dto.setId(model.getRegisterId());
        dto.setShopId(model.getShopId());
        dto.setPay_date(model.getPaymentDate());
        dto.setPay_money(model.getPaymentMoney());
        dto.setState(model.getState());
        return dto;
    }

    public RegisterOrderModel toModel(RegisterOrderDTO dto, RegisterOrderModel model){
        model.setShopId(dto.getShopId());
        model.setPaymentDate(dto.getPay_date());
        model.setPaymentMoney(dto.getPay_money());
        model.setState(dto.getState());
        return model;
    }
}
