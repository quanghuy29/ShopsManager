package com.example.shopsmanager.config.converter;

import com.example.shopsmanager.dto.CategoryDTO;
import com.example.shopsmanager.model.CategoryModel;
import org.springframework.stereotype.Component;

@Component
public class CateConverter {
    public CategoryModel toModel(CategoryDTO cate){
        CategoryModel categoryModel = new CategoryModel();
        categoryModel.setCategoryName(cate.getCategoryName());
        categoryModel.setDescription(cate.getDescription());
        return categoryModel;
    }
    public CategoryDTO toDTO(CategoryModel model){
        CategoryDTO dto = new CategoryDTO();
        dto.setCategoryId(model.getCategoryId());
        dto.setCategoryName(model.getCategoryName());
        dto.setDescription(model.getDescription());
        return dto;
    }
}
