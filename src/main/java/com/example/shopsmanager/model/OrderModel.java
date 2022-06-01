package com.example.shopsmanager.model;

import javax.persistence.*;
import java.sql.Timestamp;
@Entity
@Table(name = "Ordertb")
public class OrderModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long orderid;
    @Column(name = "Customerid")
    private long customerId;
    @Column(name = "Shopid")
    private long shopId;
    @Column(name = "Shipid")
    private long shipId;
    @Column(name = "Departmentid")
    private long departmentId;
    @Column(name = "Createddate")
    private Timestamp createdDay;
    @Column(name = "Paymentdate")
    private Timestamp paymentDay;
    @Column(name = "Shippeddate")
    private Timestamp shipDate;
    @Column(name = "Totalprice")
    private float totalPrice;
    @Column(name = "Ordernumber")
    private int orderNumber;
    @Column(name = "State")
    private int state;
    @Column(name = "shippingfee")
    private float shippingFee;
    @Column(name = "transitionfee")
    private float transitionFee;
    @Column(name = "totalpayment")
    private float totalPayment;
    public long getOrderId() {
        return orderid;
    }

    public void setOrderId(long orderId) {
        this.orderid = orderId;
    }

    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }

    public long getShopId() {
        return shopId;
    }

    public void setShopId(long shopId) {
        this.shopId = shopId;
    }

    public long getShipId() {
        return shipId;
    }

    public void setShipId(long shipId) {
        this.shipId = shipId;
    }

    public long getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(long departmentId) {
        this.departmentId = departmentId;
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
