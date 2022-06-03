package com.example.shopsmanager.api.shop;

import com.example.shopsmanager.dto.ShopDTO;
import com.example.shopsmanager.service.iShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ShopAPI {
    @Autowired
    private iShopService shopService;
    @GetMapping(value = "/shop/{idShop}")
    public ShopDTO showOneShop(@PathVariable("idShop") long id){
        return shopService.findOneById(id);
    }
    @GetMapping(value = "/shop")
    public List<ShopDTO> showAllShop(){
        return shopService.findAll();
    }
}
