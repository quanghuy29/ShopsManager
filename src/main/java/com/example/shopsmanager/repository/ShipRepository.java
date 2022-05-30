package com.example.shopsmanager.repository;

import com.example.shopsmanager.model.ShipModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShipRepository extends JpaRepository<ShipModel, Long> {
}
