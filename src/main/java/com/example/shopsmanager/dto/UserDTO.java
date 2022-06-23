package com.example.shopsmanager.dto;

import java.sql.Timestamp;
import java.util.List;

public class UserDTO {
    private Long userId;
    private List<Long> shopId;
    private String role;
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private String password;
    private Timestamp lastLogin;
    private Timestamp createdDate;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Timestamp getLastLogin() {
        return lastLogin;
    }

    public void setLastLogin(Timestamp lastLogin) {
        this.lastLogin = lastLogin;
    }

    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
