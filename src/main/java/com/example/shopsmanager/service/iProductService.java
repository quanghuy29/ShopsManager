package com.example.shopsmanager.service;

import com.example.shopsmanager.dto.ProductDTO;

import java.util.List;

public interface iProductService {
    ProductDTO save(ProductDTO productDTO);
    void delete(long[] ids);
    List<ProductDTO> findAll();
    int totalItem();
}
