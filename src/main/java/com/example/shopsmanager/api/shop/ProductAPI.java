package com.example.shopsmanager.api.shop;

import com.example.shopsmanager.dto.ListDTO;
import com.example.shopsmanager.dto.ProductDTO;
import com.example.shopsmanager.service.iProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductAPI {
    @Autowired
    private iProductService productService;

    @PostMapping(value = "/product")
    public ProductDTO createdProduct(@RequestBody ProductDTO product){
        return productService.save(product);
    }

    @GetMapping(value = "/product")
    public ListDTO<ProductDTO> showProduct(){
        ListDTO<ProductDTO> listResult = new ListDTO<ProductDTO>();
        listResult.setListResult(productService.findAll());
        listResult.setTotalItem(productService.totalItem());
        return listResult;
    }

    @PutMapping(value = "/product/{id}")
    public ProductDTO updateProduct(@RequestBody ProductDTO product, @PathVariable("id") long id){
        product.setId(id);
        return productService.save(product);
    }

    @DeleteMapping(value = "/new")
    public void deleteProduct(@RequestBody long[] ids){
        productService.delete(ids);
    }
}
