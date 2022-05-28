package com.example.shopsmanager.converter;

import com.example.shopsmanager.dto.OrderDTO;
import com.example.shopsmanager.model.OrderModel;
import org.springframework.stereotype.Component;

@Component
public class OrderConverter {
    public OrderModel toModel(OrderDTO dto){
        OrderModel model = new OrderModel();
        model.setShopId(dto.getShop().getShopId());
        model.setOrderNumber(dto.getOrderNumber());
        model.setCustomerId(dto.getCustomer().getId());
        //model.setDepartmentId(dto.getDepartment());
        //model.setShip
        model.setCreatedDay(dto.getCreatedDay());
        model.setPaymentDay(dto.getPaymentDay());
        model.setShipDate(dto.getShipDate());
        model.setTotalPrice(dto.getTotalPrice());
        model.setState(dto.getState());

        return model;
    }

    public OrderDTO toDTO(OrderModel model){
        OrderDTO dto = new OrderDTO();
        dto.setOrderId(model.getOrderId());
        dto.setOrderNumber(model.getOrderNumber());
        dto.setCreatedDay(model.getCreatedDay());
        //dto.getCustomer()
        //department
        //ship
        //shop
        dto.setShipDate(model.getShipDate());
        dto.setState(model.getState());
        dto.setTotalPrice(dto.getTotalPrice());
        dto.setPaymentDay(model.getPaymentDay());

        return dto;
    }
}
