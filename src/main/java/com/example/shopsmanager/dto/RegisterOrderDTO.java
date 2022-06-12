package com.example.shopsmanager.dto;

import java.sql.Timestamp;

public class RegisterOrderDTO {
    private Long id;
    private Long shopId;
    private float pay_money;
    private Timestamp pay_date;
    private String state;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getShopId() {
        return shopId;
    }

    public void setShopId(Long shopId) {
        this.shopId = shopId;
    }

    public float getPay_money() {
        return pay_money;
    }

    public void setPay_money(float pay_money) {
        this.pay_money = pay_money;
    }

    public Timestamp getPay_date() {
        return pay_date;
    }

    public void setPay_date(Timestamp pay_date) {
        this.pay_date = pay_date;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
