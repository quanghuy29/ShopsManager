package com.example.shopsmanager.service;

import com.example.shopsmanager.dto.RegisterOrderDTO;

import java.util.List;

public interface iRegisterOrderService {
    RegisterOrderDTO save(RegisterOrderDTO dto);
    List<RegisterOrderDTO> findAll();
}
