package com.example.shopsmanager.repository;

import com.example.shopsmanager.model.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderModel, Long> {
    List<OrderModel> findAllByShopId(Long shopId);
}
