package com.example.shopsmanager.converter;

import com.example.shopsmanager.dto.ProductDTO;
import com.example.shopsmanager.model.ProductModel;
import org.springframework.stereotype.Component;

@Component
public class ProductConverter {
    public ProductModel toModel(ProductDTO dto){
        ProductModel model = new ProductModel();
        model.setShopId(dto.getShopId());
        model.setCreatedDay(dto.getCreatedDay());
        model.setAvailable(dto.getAvailable());
        ///model.setCategoryId(dto.getCategory());
        model.setDetail(dto.getDescription());
        model.setProductName(dto.getName());
        model.setPrice(dto.getPrice());
        return model;
    }

    public ProductDTO toDTO(ProductModel model){
        ProductDTO dto = new ProductDTO();
        dto.setId(model.getProductId());
        dto.setName(model.getProductName());
        dto.setAvailable(model.getAvailable());
        dto.setCreatedDay(model.getCreatedDay());
        dto.setShopId(model.getShopId());
        dto.setPrice(model.getPrice());
        dto.setDescription(model.getDetail());
        //dto.setCategory(model.getCategoryId());
        return dto;
    }
}
