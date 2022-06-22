package com.example.shopsmanager.service;

import com.example.shopsmanager.dto.ListID;
import com.example.shopsmanager.dto.ProductDTO;
import com.example.shopsmanager.dto.ResponseDTO;

import java.util.List;

public interface iProductService {
    ProductDTO save(ProductDTO productDTO);
    ProductDTO findOneById(Long id);
    ResponseDTO delete(ListID ids);
    List<ProductDTO> findAll();
    List<ProductDTO> findAllByShop(Long shopId);
}
