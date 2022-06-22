package com.example.shopsmanager.service;

import com.example.shopsmanager.dto.ListID;
import com.example.shopsmanager.dto.OrderDTO;
import com.example.shopsmanager.dto.ResponseDTO;

import java.util.List;

public interface iOrderService {
    OrderDTO save(OrderDTO orderDTO);
    OrderDTO findOneById(Long id);
    ResponseDTO delete(ListID ids);
    List<OrderDTO> findAllByShop(Long shopId);
}
