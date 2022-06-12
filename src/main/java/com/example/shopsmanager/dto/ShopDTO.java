package com.example.shopsmanager.dto;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

public class ShopDTO {
    private Long shopId;
    private Long userID;
    private String shopName;
    private String website;
    private String address;
    private String detail;
    private String phone;
    private String email;
    private int state;
    private Timestamp createdDay;
    private Timestamp lastRegisterDay;
    private Timestamp expirationDay;

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public Long getShopId() {
        return shopId;
    }

    public void setShopId(Long shopId) {
        this.shopId = shopId;
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
