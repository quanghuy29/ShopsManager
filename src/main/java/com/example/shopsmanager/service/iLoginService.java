package com.example.shopsmanager.service;

import com.example.shopsmanager.dto.LoginDTO;
import com.example.shopsmanager.dto.ResponseDTO;

public interface iLoginService {
    Object checkLogin(LoginDTO dto);
}
