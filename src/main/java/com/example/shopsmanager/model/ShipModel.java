package com.example.shopsmanager.model;

import javax.persistence.*;

@Entity
@Table(name = "Ship")
public class ShipModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long shipid;
    @Column(name = "Companyname")
    private String companyName;

    public long getShipId() {
        return shipid;
    }

    public void setShipId(long shipId) {
        this.shipid = shipId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
}
