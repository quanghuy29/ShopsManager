package com.example.shopsmanager.service;

import com.example.shopsmanager.dto.ProductDTO;

import java.util.List;

public interface iProductService {
    ProductDTO save(ProductDTO productDTO);
    ProductDTO findOneById(Long id);
    void delete(long[] ids);
    List<ProductDTO> findAll();
    List<ProductDTO> findAllByShop(Long shopId);
    int totalItem();
}
