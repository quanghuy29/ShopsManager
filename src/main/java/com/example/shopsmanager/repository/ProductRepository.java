package com.example.shopsmanager.repository;

import com.example.shopsmanager.model.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel, Long> {
    List<ProductModel> findAllByShopId(Long shopId);
    void deleteAllByShopId(Long shopId);
}
