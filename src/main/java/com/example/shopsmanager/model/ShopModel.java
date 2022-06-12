package com.example.shopsmanager.model;

import javax.persistence.*;
import java.sql.Timestamp;
@Entity
@Table(name = "Shop")
public class ShopModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long shopid;
    @Column(name = "Userid")
    private long userId;
    @Column(name = "Shopname")
    private String shopName;
    @Column(name = "Website")
    private String website;
    @Column(name = "Address")
    private String address;
    @Column(name = "Detail")
    private String detail;
    @Column(name = "Phone")
    private String phone;
    @Column(name = "Email")
    private String email;
    @Column(name = "State")
    private int state;
    @Column(name = "Createddate")
    private Timestamp createdDay;
    @Column(name = "Lastregisterdate")
    private Timestamp lastRegisterDay;
    @Column(name = "Expirationdate")
    private Timestamp expirationDay;

    public long getShopId() {
        return shopid;
    }

    public void setShopId(long shopId) {
        this.shopid = shopId;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public Timestamp getCreatedDay() {
        return createdDay;
    }

    public void setCreatedDay(Timestamp createdDay) {
        this.createdDay = createdDay;
    }

    public Timestamp getLastRegisterDay() {
        return lastRegisterDay;
    }

    public void setLastRegisterDay(Timestamp lastRegisterDay) {
        this.lastRegisterDay = lastRegisterDay;
    }

    public Timestamp getExpirationDay() {
        return expirationDay;
    }

    public void setExpirationDay(Timestamp expirationDay) {
        this.expirationDay = expirationDay;
    }
}
