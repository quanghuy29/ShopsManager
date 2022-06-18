package com.example.shopsmanager.service;

import com.example.shopsmanager.dto.ListID;
import com.example.shopsmanager.dto.OrderDTO;

import java.util.List;

public interface iOrderService {
    OrderDTO save(OrderDTO orderDTO);
    OrderDTO findOneById(Long id);
    void delete(ListID ids);
    List<OrderDTO> findAllByShop(Long shopId);
}
