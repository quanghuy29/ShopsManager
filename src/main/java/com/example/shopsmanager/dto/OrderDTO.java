package com.example.shopsmanager.dto;

import java.sql.Timestamp;

public class OrderDTO {
    private long orderId;
    private ShopDTO shop;
    private CustomerDTO customer;
    private String ship;
    private String department;
    private Timestamp createdDay;
    private Timestamp paymentDay;
    private Timestamp shipDate;
    private float totalPrice;
    private int orderNumber;
    private int state;

    public CustomerDTO getCustomer() {
        return customer;
    }

    public void setCustomer(CustomerDTO customer) {
        this.customer = customer;
    }

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public ShopDTO getShop() {
        return shop;
    }

    public void setShop(ShopDTO shop) {
        this.shop = shop;
    }

    public String getShip() {
        return ship;
    }

    public void setShip(String ship) {
        this.ship = ship;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public Timestamp getCreatedDay() {
        return createdDay;
    }

    public void setCreatedDay(Timestamp createdDay) {
        this.createdDay = createdDay;
    }

    public Timestamp getPaymentDay() {
        return paymentDay;
    }

    public void setPaymentDay(Timestamp paymentDay) {
        this.paymentDay = paymentDay;
    }

    public Timestamp getShipDate() {
        return shipDate;
    }

    public void setShipDate(Timestamp shipDate) {
        this.shipDate = shipDate;
    }

    public float getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(float totalPrice) {
        this.totalPrice = totalPrice;
    }

    public int getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(int orderNumber) {
        this.orderNumber = orderNumber;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }
}
