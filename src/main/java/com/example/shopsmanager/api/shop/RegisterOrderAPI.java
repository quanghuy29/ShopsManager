package com.example.shopsmanager.api.shop;

import com.example.shopsmanager.dto.RegisterOrderDTO;
import com.example.shopsmanager.service.impl.RegisterOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegisterOrderAPI {
    @Autowired
    private RegisterOrderService registerOrderService;
    @PostMapping(value = "/register-order")
    public RegisterOrderDTO save(@RequestBody RegisterOrderDTO dto){
        return registerOrderService.save(dto);
    }
    @PutMapping(value = "/register-order/{idOrder}")
    public RegisterOrderDTO save(@RequestBody RegisterOrderDTO registerOrderDTO, @PathVariable("idOrder") Long orderId){
        registerOrderDTO.setId(orderId);
        return registerOrderService.save(registerOrderDTO);
    }
}
