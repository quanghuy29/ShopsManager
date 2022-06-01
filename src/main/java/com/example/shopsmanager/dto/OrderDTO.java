package com.example.shopsmanager.dto;

import java.sql.Timestamp;
import java.util.List;

public class OrderDTO {
    private Long orderId;
    private Long shopId;
    private Long customerId;
    private ShipDTO ship;
    private Timestamp createdDay;
    private Timestamp paymentDay;
    private Timestamp shipDate;
    private float totalPrice;
    private int orderNumber;
    private int state;
    private float shippingFee;
    private float transitionFee;
    private float totalPayment;
    private List<OrderDetailDTO> orderDetail;

    public List<OrderDetailDTO> getOrderDetail() {
        return orderDetail;
    }

    public void setOrderDetail(List<OrderDetailDTO> orderDetail) {
        this.orderDetail = orderDetail;
    }

    public Long getCustomer() {
        return customerId;
    }

    public void setCustomer(Long customer) {
        this.customerId = customer;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getShopId() {
        return shopId;
    }

    public void setShopId(Long shop) {
        this.shopId = shop;
    }

    public ShipDTO getShip() {
        return ship;
    }

    public void setShip(ShipDTO ship) {
        this.ship = ship;
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

    public float getShippingFee() {
        return shippingFee;
    }

    public void setShippingFee(float shippingFee) {
        this.shippingFee = shippingFee;
    }

    public float getTransitionFee() {
        return transitionFee;
    }

    public void setTransitionFee(float transitionFee) {
        this.transitionFee = transitionFee;
    }

    public float getTotalPayment() {
        return totalPayment;
    }

    public void setTotalPayment(float totalPayment) {
        this.totalPayment = totalPayment;
    }
}
