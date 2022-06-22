package com.example.shopsmanager.api.shop;

import com.example.shopsmanager.dto.CustomerDTO;
import com.example.shopsmanager.dto.ListID;
import com.example.shopsmanager.dto.ResponseDTO;
import com.example.shopsmanager.service.iCustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin
@RestController
public class CustomerAPI {
    @Autowired
    private iCustomerService customerService;
    @PostMapping(value = "/customer")
    public CustomerDTO createCustomer(@RequestBody CustomerDTO customer){
        return customerService.save(customer);
    }
    @GetMapping(value = "/customer/{idCustomer}")
    public CustomerDTO showOneCustomer(@PathVariable("idCustomer") long id){
        return customerService.findOneById(id);
    }
    @GetMapping(value = "/shop/customer/{idShop}")
    public List<CustomerDTO> showAllByShop(@PathVariable("idShop") long id){
        return customerService.findAllByShop(id);
    }
    @GetMapping(value = "/customer")
    public List<CustomerDTO> showAll(){
        return customerService.findAll();
    }
    @PutMapping(value = "/customer/{idCustomer}")
    public CustomerDTO updateCustomer(@RequestBody CustomerDTO customer, @PathVariable("idCustomer") long id){
        customer.setId(id);
        return customerService.save(customer);
    }
    @DeleteMapping(value = "/customer/{idCustomer}")
    public ResponseDTO deleteCustomer(@PathVariable("idCustomer") long id){
        ListID ids = new ListID();
        List<Long> list = new ArrayList<>();
        list.add(id);
        ids.setIds(list);
        return customerService.delete(ids);
    }
}
