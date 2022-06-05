package com.example.shopsmanager.service.impl;

import com.example.shopsmanager.converter.OrderConverter;
import com.example.shopsmanager.converter.OrderDetailConverter;
import com.example.shopsmanager.dto.OrderDTO;
import com.example.shopsmanager.dto.OrderDetailDTO;
import com.example.shopsmanager.model.OrderModel;
import com.example.shopsmanager.model.OrderProductModel;
import com.example.shopsmanager.repository.OrderProductRepository;
import com.example.shopsmanager.repository.OrderRepository;
import com.example.shopsmanager.service.iOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
@Transactional
@Service
public class OrderService implements iOrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderConverter orderConverter;
    @Autowired
    private OrderProductRepository orderProductRepository;
    @Autowired
    private OrderDetailConverter orderDetailConverter;
    @Override
    public OrderDTO save(OrderDTO orderDTO) {
        OrderModel model;
        if (orderDTO.getOrderId() != null) {
            OrderModel oldModel = orderRepository.getById(orderDTO.getOrderId());
            model = orderConverter.toModel(orderDTO, oldModel);
        } else {
            model = orderConverter.toModel(orderDTO);
        }
        model = orderRepository.save(model);
        for(OrderDetailDTO dto: orderDTO.getOrderDetail()){
            OrderProductModel orderProductModel;
            if (dto.getOrderDetailId() != null) {
                OrderProductModel oldModel = orderProductRepository.getById(dto.getOrderDetailId());
                orderProductModel = orderDetailConverter.toModel(dto,model.getOrderId(), oldModel);
            } else {
                orderProductModel = orderDetailConverter.toModel(dto, model.getOrderId());
            }
            orderProductRepository.save(orderProductModel);
        }
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
    public void delete(long[] ids) {
        for(long item: ids){
            if(orderRepository.findById(item).isPresent())
            {
                OrderModel model = orderRepository.findById(item).get();
                orderProductRepository.deleteAllByOrderId(model.getOrderId());
            }
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
