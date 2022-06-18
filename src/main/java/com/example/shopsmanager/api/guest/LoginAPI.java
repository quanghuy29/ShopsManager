package com.example.shopsmanager.api.guest;

import com.example.shopsmanager.dto.LoginDTO;
import com.example.shopsmanager.service.iLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class LoginAPI {
    @Autowired
    private iLoginService loginService;
    @PostMapping("/login")
    public Object login(@RequestBody LoginDTO loginInfo){
        return loginService.checkLogin(loginInfo);
    }
}
