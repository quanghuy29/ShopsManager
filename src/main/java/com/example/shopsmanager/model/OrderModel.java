package com.example.shopsmanager.model;

import javax.persistence.*;
import java.sql.Timestamp;
@Entity
@Table(name = "Order")
public class OrderModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long orderId;
    @Column(name = "CustomerId")
    private long customerId;
    @Column(name = "ShopId")
    private long shopId;
    @Column(name = "ShipId")
    private long shipId;
    @Column(name = "DepartmentId")
    private long departmentId;
    @Column(name = "CreatedDate")
    private Timestamp createdDay;
    @Column(name = "PaymentDate")
    private Timestamp paymentDay;
    @Column(name = "ShipDate")
    private Timestamp shipDate;
    @Column(name = "TotalPrice")
    private float totalPrice;
    @Column(name = "OrderNumber")
    private int orderNumber;
    @Column(name = "State")
    private int state;

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
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
}
