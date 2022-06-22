package com.example.shopsmanager.service;

import com.example.shopsmanager.dto.CustomerDTO;
import com.example.shopsmanager.dto.ListID;
import com.example.shopsmanager.dto.ResponseDTO;

import java.util.List;

public interface iCustomerService {
    CustomerDTO save(CustomerDTO dto);
    CustomerDTO findOneById(Long id);
    List<CustomerDTO> findAllByShop(Long shopId);
    List<CustomerDTO> findAll();
    ResponseDTO delete(ListID ids);
}
