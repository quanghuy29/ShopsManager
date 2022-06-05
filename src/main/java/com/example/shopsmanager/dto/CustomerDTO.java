package com.example.shopsmanager.dto;

import java.util.ArrayList;
import java.util.List;

public class CustomerDTO {
    private long id;
    private String firstName;
    private String lastName;
    private String address;
    private String phone;
    private String email;
    private List<OrderDTO> listOrder = new ArrayList<>();

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public List<OrderDTO> getListOrder() {
        return listOrder;
    }

    public void setListOrder(List<OrderDTO> listOrder) {
        this.listOrder = listOrder;
    }
}
