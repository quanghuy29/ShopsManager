package com.example.shopsmanager.api.admin;

import com.example.shopsmanager.dto.ShopDTO;
import com.example.shopsmanager.service.iShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
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
