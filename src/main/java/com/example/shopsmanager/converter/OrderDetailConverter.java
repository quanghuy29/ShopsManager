package com.example.shopsmanager.converter;

import com.example.shopsmanager.dto.OrderDetailDTO;
import com.example.shopsmanager.model.OrderProductModel;
import org.springframework.stereotype.Component;

@Component
public class OrderDetailConverter {
    public OrderProductModel toModel(OrderDetailDTO dto){
        OrderProductModel model = new OrderProductModel();
        model.setProductId(dto.getProductId());
        model.setOrderNumber(dto.getQuantity());
        return model;
    }
    public OrderDetailDTO toDTO(OrderProductModel model){
        OrderDetailDTO dto = new OrderDetailDTO();
        dto.setOrderDetailId(model.getOrderProId());
        dto.setProductId(model.getProductId());
        dto.setQuantity(model.getOrderNumber());
        return dto;
    }
}
