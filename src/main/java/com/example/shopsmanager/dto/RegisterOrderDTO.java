package com.example.shopsmanager.dto;

import java.sql.Timestamp;

public class RegisterOrderDTO {
    private long id;
    private String shopName;
    private float money;
    private Timestamp date;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopID) {
        this.shopName = shopID;
    }

    public float getMoney() {
        return money;
    }

    public void setMoney(float money) {
        this.money = money;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }
}
