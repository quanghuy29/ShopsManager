package com.example.shopsmanager.api.shop;

import com.example.shopsmanager.dto.ShopDTO;
import com.example.shopsmanager.service.iShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @DeleteMapping(value = "/shop")
    public void deleteShop(@RequestBody long[] ids){
        shopService.delete(ids);
    }
}
