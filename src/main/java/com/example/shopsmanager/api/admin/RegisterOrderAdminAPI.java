package com.example.shopsmanager.api.admin;

import com.example.shopsmanager.dto.ListDTO;
import com.example.shopsmanager.dto.RegisterOrderDTO;
import com.example.shopsmanager.service.iRegisterOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class RegisterOrderAdminAPI {
    @Autowired
    private iRegisterOrderService registerOrderService;
    @GetMapping(value = "register-order")
    public ListDTO<RegisterOrderDTO> showAllRegisterOrder(){
        ListDTO<RegisterOrderDTO> listResult = new ListDTO<>();
        listResult.setListResult(registerOrderService.findAll());
        listResult.setTotalItem();
        return listResult;
    }
}
