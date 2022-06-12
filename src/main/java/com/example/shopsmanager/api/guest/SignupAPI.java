package com.example.shopsmanager.api.guest;

import com.example.shopsmanager.dto.ShopDTO;
import com.example.shopsmanager.dto.SignUpDTO;
import com.example.shopsmanager.service.iShopService;
import com.example.shopsmanager.service.iUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignupAPI {
    @Autowired
    private iUserService userService;
    @Autowired
    private iShopService shopService;
    @PostMapping(value = "/sign-up")
    public SignUpDTO createUser(@RequestBody SignUpDTO user){
        return userService.save(user);
    }
    @PostMapping(value = "/register")
    public ShopDTO createShop(@RequestBody ShopDTO shop){
        return shopService.save(shop);
    }
}
