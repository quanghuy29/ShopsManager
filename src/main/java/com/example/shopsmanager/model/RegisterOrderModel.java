package com.example.shopsmanager.model;

import java.sql.Timestamp;

public class RegisterOrderModel {
    private long registerId;
    private long shopId;
    private float paymentMoney;
    private Timestamp paymentDate;

    public long getRegisterId() {
        return registerId;
    }

    public void setRegisterId(long registerId) {
        this.registerId = registerId;
    }

    public long getShopId() {
        return shopId;
    }

    public void setShopId(long shopId) {
        this.shopId = shopId;
    }

    public float getPaymentMoney() {
        return paymentMoney;
    }

    public void setPaymentMoney(float paymentMoney) {
        this.paymentMoney = paymentMoney;
    }

    public Timestamp getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Timestamp paymentDate) {
        this.paymentDate = paymentDate;
    }
}
