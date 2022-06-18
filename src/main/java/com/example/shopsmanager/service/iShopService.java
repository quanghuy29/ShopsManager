package com.example.shopsmanager.service;

import com.example.shopsmanager.dto.ListID;
import com.example.shopsmanager.dto.ShopDTO;

import java.util.List;

public interface iShopService {
    ShopDTO save(ShopDTO dto);
    ShopDTO findOneById(Long id);
    void delete(ListID ids);
    List<ShopDTO> findAll();
}
