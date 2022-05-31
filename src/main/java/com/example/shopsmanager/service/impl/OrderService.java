package com.example.shopsmanager.service.impl;

import com.example.shopsmanager.converter.OrderConverter;
import com.example.shopsmanager.dto.OrderDTO;
import com.example.shopsmanager.model.OrderModel;
import com.example.shopsmanager.repository.OrderRepository;
import com.example.shopsmanager.service.iOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService implements iOrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderConverter orderConverter;
    @Override
    public OrderDTO save(OrderDTO orderDTO) {
        OrderModel model = new OrderModel();
        if (orderDTO.getOrderId() != null) {
            OrderModel oldModel = orderRepository.findById(orderDTO.getOrderId()).get();
            model = orderConverter.toModel(orderDTO, oldModel);
        } else {
            model = orderConverter.toModel(orderDTO);
        }
        model = orderRepository.save(model);
        return orderConverter.toDTO(model);
    }

    @Override
    public OrderDTO findOneById(Long id) {
        return null;
    }

    @Override
    public void delete(Long[] ids) {

    }

    @Override
    public List<OrderDTO> findAllByShop(Long shopId) {
        return null;
    }
}
