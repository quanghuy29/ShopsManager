package com.example.shopsmanager.converter;

import com.example.shopsmanager.dto.ProductDTO;
import com.example.shopsmanager.model.ProductModel;
import com.example.shopsmanager.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProductConverter {
    @Autowired
    private CategoryRepository categoryRepository;
    public ProductModel toModel(ProductDTO dto){
        ProductModel model = new ProductModel();
        model.setShopId(dto.getShopId());
        model.setCreatedDay(dto.getCreatedDay());
        model.setAvailable(dto.getAvailable());
        model.setCategoryId(categoryRepository.findByCategoryName(dto.getCategory()).getCategoryId());
        model.setDetail(dto.getDescription());
        model.setProductName(dto.getName());
        model.setPrice(dto.getPrice());
        model.setImage(dto.getImage());
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
        dto.setImage(model.getImage());
        dto.setCategory(categoryRepository.findById(model.getCategoryId()).get().getCategoryName());
        return dto;
    }
    public ProductModel toModel(ProductDTO dto, ProductModel model){
        model.setShopId(dto.getShopId());
        model.setCreatedDay(dto.getCreatedDay());
        model.setAvailable(dto.getAvailable());
        model.setCategoryId(categoryRepository.findByCategoryName(dto.getCategory()).getCategoryId());
        model.setDetail(dto.getDescription());
        model.setProductName(dto.getName());
        model.setPrice(dto.getPrice());
        model.setImage(dto.getImage());
        return model;
    }
}
