package com.example.shopsmanager.repository;

import com.example.shopsmanager.model.RegisterOrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterOrderRepo extends JpaRepository<RegisterOrderModel, Long> {
}
