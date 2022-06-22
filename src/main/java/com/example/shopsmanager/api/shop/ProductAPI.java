package com.example.shopsmanager.api.shop;

import com.example.shopsmanager.dto.ListDTO;
import com.example.shopsmanager.dto.ListID;
import com.example.shopsmanager.dto.ProductDTO;
import com.example.shopsmanager.dto.ResponseDTO;
import com.example.shopsmanager.service.iProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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

    @DeleteMapping(value = "/product/{idProduct}")
    public ResponseDTO deleteProduct(@PathVariable("idProduct") long id){
        ListID ids = new ListID();
        List<Long> list = new ArrayList<>();
        list.add(id);
        ids.setIds(list);
        return productService.delete(ids);
    }
}
