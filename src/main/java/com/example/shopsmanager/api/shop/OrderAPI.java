package com.example.shopsmanager.api.shop;

import com.example.shopsmanager.dto.ListID;
import com.example.shopsmanager.dto.OrderDTO;
import com.example.shopsmanager.dto.ResponseDTO;
import com.example.shopsmanager.service.iOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin
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
    @GetMapping(value = "/order/shop/{shopId}")
    public List<OrderDTO> showAllByShop(@PathVariable("shopId") long id){
        return orderService.findAllByShop(id);
    }
    @PutMapping(value = "/order/{idOrder}")
    public OrderDTO updateOrder(@RequestBody OrderDTO order,@PathVariable("idOrder") long id){
        order.setOrderId(id);
        return orderService.save(order);
    }
    @DeleteMapping(value = "/order/{idOrder}")
    public ResponseDTO deleteProduct(@PathVariable("idOrder") long id){
        ListID ids = new ListID();
        List<Long> list = new ArrayList<>();
        list.add(id);
        ids.setIds(list);
        return orderService.delete(ids);
    }
}
