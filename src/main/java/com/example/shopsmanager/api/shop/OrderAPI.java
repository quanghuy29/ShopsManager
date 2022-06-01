package com.example.shopsmanager.api.shop;

import com.example.shopsmanager.dto.OrderDTO;
import com.example.shopsmanager.service.iOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class OrderAPI {
    @Autowired
    private iOrderService orderService;
    @PostMapping(value = "/order")
    public OrderDTO createOrder(@RequestBody OrderDTO order){
        return orderService.save(order);
    }
    @GetMapping(value = "/order/{idOrder}")
    public OrderDTO showOneOrder(@PathVariable("idOrder") long id){
        return orderService.findOneById(id);
    }
}
