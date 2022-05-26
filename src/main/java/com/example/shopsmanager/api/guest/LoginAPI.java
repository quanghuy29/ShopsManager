package com.example.shopsmanager.api.guest;

import com.example.shopsmanager.dto.LoginDTO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginAPI {
    @PostMapping("/login")
    public LoginDTO login(@RequestBody LoginDTO loginInfo){
        return loginInfo;
    }
}
