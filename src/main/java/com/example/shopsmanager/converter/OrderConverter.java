package com.example.shopsmanager.converter;

import com.example.shopsmanager.dto.OrderDTO;
import com.example.shopsmanager.model.OrderModel;
import com.example.shopsmanager.repository.ShipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrderConverter {
    @Autowired
    private ShipRepository shipRepository;
    @Autowired
    private ShipConverter shipConverter;
    public OrderModel toModel(OrderDTO dto){
        OrderModel model = new OrderModel();
        model.setShopId(dto.getShopId());
        model.setOrderNumber(dto.getOrderNumber());
        model.setCustomerId(dto.getCustomer());
        model.setShipId(dto.getShip().getId());
        model.setCreatedDay(dto.getCreatedDay());
        model.setPaymentDay(dto.getPaymentDay());
        model.setShipDate(dto.getShipDate());
        model.setTotalPrice(dto.getTotalPrice());
        model.setState(dto.getState());
        model.setShippingFee(dto.getShippingFee());
        model.setTransitionFee(dto.getTransitionFee());
        model.setTotalPayment(dto.getTotalPayment());
        return model;
    }

    public OrderDTO toDTO(OrderModel model){
        OrderDTO dto = new OrderDTO();
        dto.setOrderId(model.getOrderId());
        dto.setOrderNumber(model.getOrderNumber());
        dto.setCreatedDay(model.getCreatedDay());
        dto.setShip(shipConverter.toDTO(shipRepository.findById(model.getShipId()).get()));
        dto.setShopId(model.getShopId());
        dto.setShipDate(model.getShipDate());
        dto.setState(model.getState());
        dto.setTotalPrice(model.getTotalPrice());
        dto.setPaymentDay(model.getPaymentDay());
        dto.setShippingFee(model.getShippingFee());
        dto.setTransitionFee(model.getTransitionFee());
        dto.setTotalPayment(model.getTotalPayment());
        return dto;
    }
    public OrderModel toModel(OrderDTO dto, OrderModel model){
        model.setShopId(dto.getShopId());
        model.setOrderNumber(dto.getOrderNumber());
        model.setCustomerId(dto.getCustomer());
        model.setShipId(dto.getShip().getId());
        model.setCreatedDay(dto.getCreatedDay());
        model.setPaymentDay(dto.getPaymentDay());
        model.setShipDate(dto.getShipDate());
        model.setTotalPrice(dto.getTotalPrice());
        model.setState(dto.getState());
        model.setShippingFee(dto.getShippingFee());
        model.setTransitionFee(dto.getTransitionFee());
        model.setTotalPayment(dto.getTotalPayment());
        return model;
    }
}
