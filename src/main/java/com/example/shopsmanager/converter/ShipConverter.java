package com.example.shopsmanager.converter;

import com.example.shopsmanager.dto.ShipDTO;
import com.example.shopsmanager.model.ShipModel;
import org.springframework.stereotype.Component;

@Component
public class ShipConverter {
    public ShipModel toModel(ShipDTO dto){
        ShipModel model = new ShipModel();
        model.setCompanyName(dto.getName());
        return model;
    }
    public ShipDTO toDTO(ShipModel model){
        ShipDTO dto = new ShipDTO();
        dto.setId(model.getShipId());
        dto.setName(model.getCompanyName());
        return dto;
    }
}
