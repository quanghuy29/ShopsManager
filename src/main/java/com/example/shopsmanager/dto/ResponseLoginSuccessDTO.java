package com.example.shopsmanager.dto;

import java.sql.Timestamp;
import java.util.List;

public class ResponseLoginSuccessDTO {
    private Long userId;
    private List<Long> shopId;
    private String role;
    private Timestamp expirationDay;
    private int stateUser;
    private List<Integer> stateShop;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<Long> getShopId() {
        return shopId;
    }

    public void setShopId(List<Long> shopId) {
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

    public List<Integer> getStateShop() {
        return stateShop;
    }

    public void setStateShop(List<Integer> stateShop) {
        this.stateShop = stateShop;
    }
}
