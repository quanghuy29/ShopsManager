package com.example.shopsmanager.model;

import javax.persistence.*;
import java.sql.Timestamp;
@Entity
@Table(name = "RegisterOrder")
public class RegisterOrderModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long registerId;
    @Column(name = "ShopId")
    private long shopId;
    @Column(name = "PaymentMoney")
    private float paymentMoney;
    @Column(name = "PaymentDate")
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
