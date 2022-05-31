package com.example.shopsmanager.repository;

import com.example.shopsmanager.model.OrderProductModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderProductRepository extends JpaRepository<OrderProductModel, Long> {
    OrderProductModel findByOrderId(Long orderID);
}
