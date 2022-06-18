package com.example.shopsmanager.api.shop;

import com.example.shopsmanager.dto.ListDTO;
import com.example.shopsmanager.dto.ProductDTO;
import com.example.shopsmanager.service.iProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
public class ProductAPI {
    @Autowired
    private iProductService productService;

    @PostMapping(value = "/product")
    public ProductDTO createdProduct(@RequestBody ProductDTO product){
        return productService.save(product);
    }

    @GetMapping(value = "/product/shop/{idShop}")
    public ListDTO<ProductDTO> showProductOfShop(@PathVariable("idShop") long idShop){
        ListDTO<ProductDTO> listResult = new ListDTO<ProductDTO>();
        listResult.setListResult(productService.findAllByShop(idShop));
        listResult.setTotalItem();
        return listResult;
    }
    @GetMapping(value = "/product/{idProduct}")
    public ProductDTO showOneProduct(@PathVariable("idProduct") long id){
        return productService.findOneById(id);
    }
    @PutMapping(value = "/product/{id}")
    public ProductDTO updateProduct(@RequestBody ProductDTO product, @PathVariable("id") long id){
        product.setId(id);
        return productService.save(product);
    }

    @DeleteMapping(value = "/product")
    public void deleteProduct(@RequestBody long[] ids){
        productService.delete(ids);
    }
}
