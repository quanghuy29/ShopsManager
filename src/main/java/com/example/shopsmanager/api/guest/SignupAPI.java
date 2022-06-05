package com.example.shopsmanager.api.guest;

import com.example.shopsmanager.dto.SignUpDTO;
import com.example.shopsmanager.service.iUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignupAPI {
    @Autowired
    private iUserService userService;
    @PostMapping(value =  "/dang-ki")
    public SignUpDTO createUser(@RequestBody SignUpDTO user){
        return userService.save(user);
    }
}
