package com.example.shopsmanager.repository;

import com.example.shopsmanager.model.OrderProductModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderProductRepository extends JpaRepository<OrderProductModel, Long> {
    List<OrderProductModel> findAllByOrderId(Long orderID);
    void deleteAllByOrderId(Long orderId);
}
