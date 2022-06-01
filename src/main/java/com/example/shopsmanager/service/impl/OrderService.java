package com.example.shopsmanager.service.impl;

import com.example.shopsmanager.converter.OrderConverter;
import com.example.shopsmanager.dto.OrderDTO;
import com.example.shopsmanager.model.OrderModel;
import com.example.shopsmanager.repository.OrderRepository;
import com.example.shopsmanager.service.iOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        if(orderRepository.findById(id).isPresent())
        {
            OrderModel model = orderRepository.findById(id).get();
            return orderConverter.toDTO(model);
        }
        else return null;
    }

    @Override
    public void delete(Long[] ids) {
        for(long item: ids){
            orderRepository.deleteById(item);
        }
    }

    @Override
    public List<OrderDTO> findAllByShop(Long shopId) {
        List<OrderDTO> listDTO = new ArrayList<>();
        List<OrderModel> listModel = orderRepository.findAllByShopId(shopId);
        for(OrderModel item: listModel){
            OrderDTO dto = orderConverter.toDTO(item);
            listDTO.add(dto);
        }
        return listDTO;
    }
}
