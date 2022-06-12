package com.example.shopsmanager.dto;

import java.sql.Timestamp;

public class ResponseLoginSuccessDTO {
    private Long userId;
    private Long shopId;
    private String role;
    private Timestamp expirationDay;
    private int stateUser;
    private int stateShop;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getShopId() {
        return shopId;
    }

    public void setShopId(Long shopId) {
        this.shopId = shopId;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Timestamp getExpirationDay() {
        return expirationDay;
    }

    public void setExpirationDay(Timestamp expirationDay) {
        this.expirationDay = expirationDay;
    }

    public int getStateUser() {
        return stateUser;
    }

    public void setStateUser(int stateUser) {
        this.stateUser = stateUser;
    }

    public int getStateShop() {
        return stateShop;
    }

    public void setStateShop(int stateShop) {
        this.stateShop = stateShop;
    }
}
