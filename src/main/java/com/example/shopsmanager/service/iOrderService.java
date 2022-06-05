package com.example.shopsmanager.service;

import com.example.shopsmanager.dto.OrderDTO;

import java.util.List;

public interface iOrderService {
    OrderDTO save(OrderDTO orderDTO);
    OrderDTO findOneById(Long id);
    void delete(Long[] ids);
    List<OrderDTO> findAllByShop(Long shopId);
}
