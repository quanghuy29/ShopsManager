package com.example.shopsmanager.api.admin;

import com.example.shopsmanager.dto.ListDTO;
import com.example.shopsmanager.dto.UserDTO;
import com.example.shopsmanager.service.iUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class UserAPI {
    @Autowired
    private iUserService userService;
    @GetMapping(value = "/user/{idUser}")
    public UserDTO showOneUser(@PathVariable("idUser") long id){
        return userService.findOneById(id);
    }
    @GetMapping(value = "/user")
    public ListDTO<UserDTO> showAllUser(){
        ListDTO<UserDTO> listResult = new ListDTO<>();
        listResult.setListResult(userService.findAll());
        listResult.setTotalItem();
        return listResult;
    }
    @PutMapping(value = "/user/{idUser}")
    public UserDTO updateUser(@PathVariable("idUser") long id, @RequestBody UserDTO dto){
        dto.setUserId(id);
        return userService.save(dto);
    }
    @PostMapping(value = "/user")
    public UserDTO saveUser(@RequestBody UserDTO dto){
        return userService.save(dto);
    }
}
