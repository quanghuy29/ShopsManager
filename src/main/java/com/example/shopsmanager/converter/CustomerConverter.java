package com.example.shopsmanager.converter;

import com.example.shopsmanager.dto.CustomerDTO;
import com.example.shopsmanager.model.CustomerModel;
import org.springframework.stereotype.Component;

@Component
public class CustomerConverter {
    public CustomerModel toModel(CustomerDTO dto){
        CustomerModel model = new CustomerModel();
        model.setFirstName(dto.getFirstName());
        model.setLastName(dto.getLastName());
        model.setAddress(dto.getAddress());
        model.setEmail(dto.getEmail());
        model.setPhone(dto.getPhone());
        return model;
    }

    public CustomerDTO toDTO(CustomerModel model){
        CustomerDTO dto = new CustomerDTO();
        dto.setId(model.getCustomerId());
        dto.setFirstName(model.getFirstName());
        dto.setLastName(model.getLastName());
        dto.setAddress(model.getAddress());
        dto.setEmail(model.getEmail());
        dto.setPhone(model.getPhone());
        return dto;
    }
    public CustomerModel toModel(CustomerDTO dto, CustomerModel model){
        model.setFirstName(dto.getFirstName());
        model.setLastName(dto.getLastName());
        model.setAddress(dto.getAddress());
        model.setEmail(dto.getEmail());
        model.setPhone(dto.getPhone());
        return model;
    }
}
