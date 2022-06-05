package com.example.shopsmanager.service;

import com.example.shopsmanager.dto.CustomerDTO;
import com.example.shopsmanager.dto.OrderDTO;

import java.util.List;

public interface iCustomerService {
    CustomerDTO save(CustomerDTO dto);
    CustomerDTO findOneById(Long id);
    List<CustomerDTO> findAllByShop(Long shopId);
    void delete(long[] ids);
}
