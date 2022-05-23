package com.example.shopsmanager.model;

import javax.persistence.*;

@Entity
@Table(name = "Ship")
public class ShipModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long shipId;
    @Column(name = "CompanyName")
    private String companyName;

    public long getShipId() {
        return shipId;
    }

    public void setShipId(long shipId) {
        this.shipId = shipId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
}
