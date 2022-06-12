package com.example.shopsmanager.service.impl;

import com.example.shopsmanager.converter.RegisterOrderConverter;
import com.example.shopsmanager.dto.RegisterOrderDTO;
import com.example.shopsmanager.model.RegisterOrderModel;
import com.example.shopsmanager.repository.RegisterOrderRepo;
import com.example.shopsmanager.service.iRegisterOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RegisterOrderService implements iRegisterOrderService {
    @Autowired
    private RegisterOrderRepo registerOrderRepo;
    @Autowired
    private RegisterOrderConverter registerOrderConverter;
    @Override
    public RegisterOrderDTO save(RegisterOrderDTO dto) {
        RegisterOrderModel model;
        if(dto.getId() != null){
            RegisterOrderModel oldModel = registerOrderRepo.getById(dto.getId());
            model = registerOrderConverter.toModel(dto, oldModel);
        } else model = registerOrderConverter.toModel(dto);
        model = registerOrderRepo.save(model);
        return registerOrderConverter.toDTO(model);
    }

    @Override
    public List<RegisterOrderDTO> findAll() {
        List<RegisterOrderDTO> listDTO = new ArrayList<>();
        List<RegisterOrderModel> listModel = registerOrderRepo.findAll();
        for(RegisterOrderModel item: listModel){
            RegisterOrderDTO dto = registerOrderConverter.toDTO(item);
            listDTO.add(dto);
        }
        return listDTO;
    }
}
