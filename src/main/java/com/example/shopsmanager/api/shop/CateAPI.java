package com.example.shopsmanager.api.shop;

import com.example.shopsmanager.dto.CategoryDTO;
import com.example.shopsmanager.service.iCateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class CateAPI {
    @Autowired
    private iCateService cateService;
    @PostMapping(value = "/category")
    public CategoryDTO createdCate(@RequestBody CategoryDTO category){
        return cateService.save(category);
    }
}
