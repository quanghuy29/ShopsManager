package com.example.shopsmanager.service.impl;

import com.example.shopsmanager.converter.CateConverter;
import com.example.shopsmanager.dto.CategoryDTO;
import com.example.shopsmanager.model.CategoryModel;
import com.example.shopsmanager.repository.CategoryRepository;
import com.example.shopsmanager.service.iCateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CateService implements iCateService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private CateConverter cateConverter;
    @Override
    public CategoryDTO save(CategoryDTO cateDTO) {
        CategoryModel categoryModel = new CategoryModel();
        categoryModel = cateConverter.toModel(cateDTO);
        categoryModel = categoryRepository.save(categoryModel);
        return cateConverter.toDTO(categoryModel);
    }
}
