package com.example.shopsmanager.converter;

import com.example.shopsmanager.dto.OrderDTO;
import com.example.shopsmanager.model.OrderModel;
import org.springframework.stereotype.Component;

@Component
public class OrderConverter {
    public OrderModel toModel(OrderDTO dto){
        OrderModel model = new OrderModel();
        model.setCreatedDay(dto.getCreatedDay());
        model.setOrderNumber(dto.getOrderNumber());
        model.setCustomerId(dto.getCustomer().getId());
        //model.setDepartmentId(dto.getDepartment());
        //model.setShip
        model.setPaymentDay(dto.getPaymentDay());
        model.setTotalPrice(dto.getTotalPrice());
        model.setShipDate(dto.getShipDate());
        model.setState(dto.getState());
        model.setTotalPrice(dto.getTotalPrice());
        return model;
    }
}
