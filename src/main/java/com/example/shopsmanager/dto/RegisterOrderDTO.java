package com.example.shopsmanager.dto;

import java.sql.Timestamp;

public class RegisterOrderDTO {
    private String shopID;
    private float money;
    private Timestamp date;

    public String getShopID() {
        return shopID;
    }

    public void setShopID(String shopID) {
        this.shopID = shopID;
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
