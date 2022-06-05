package com.example.shopsmanager.model;

import javax.persistence.*;
import java.sql.Timestamp;
@Entity
@Table(name = "Registerorder")
public class RegisterOrderModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long registerid;
    @Column(name = "Shopid")
    private long shopId;
    @Column(name = "Paymentmoney")
    private float paymentMoney;
    @Column(name = "Paymentdate")
    private Timestamp paymentDate;

    public long getRegisterId() {
        return registerid;
    }

    public void setRegisterId(long registerId) {
        this.registerid = registerId;
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
