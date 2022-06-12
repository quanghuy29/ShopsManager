package com.example.shopsmanager.repository;

import com.example.shopsmanager.model.ShopModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShopRepository extends JpaRepository<ShopModel, Long> {
    List<ShopModel> findByUserId(Long userId);
}
