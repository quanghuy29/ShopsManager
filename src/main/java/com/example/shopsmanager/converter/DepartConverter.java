package com.example.shopsmanager.converter;

import com.example.shopsmanager.dto.DepartmentDTO;
import com.example.shopsmanager.model.DepartmentModel;
import org.springframework.stereotype.Component;

@Component
public class DepartConverter {
    public DepartmentModel toModel(DepartmentDTO dto){
        DepartmentModel model = new DepartmentModel();
        model.setDepartName(dto.getName());
        return model;
    }

    public DepartmentDTO toDTO(DepartmentModel model){
        DepartmentDTO dto = new DepartmentDTO();
        dto.setId(model.getDepartId());
        dto.setName(model.getDepartName());
        return dto;
    }
}
