package com.example.shopsmanager.api.admin;

import com.example.shopsmanager.dto.ShopDTO;
import com.example.shopsmanager.service.iShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShopAdminAPI {
    @Autowired
    private iShopService shopService;
    @PutMapping(value = "/shop/{shopId}")
    public ShopDTO save(@RequestBody ShopDTO dto, @PathVariable("shopId") Long id){
        dto.setShopId(id);
        return shopService.save(dto);
    }
}
