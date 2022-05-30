package com.example.shopsmanager.model;

import javax.persistence.*;

@Entity
@Table(name = "Order_Product")
public class OrderProductModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long orderProId;
    @Column(name = "Orderid")
    private long orderId;
    @Column(name = "Productid")
    private long productId;
    @Column(name = "Ordernumber")
    private int orderNumber;

    public long getOrderProId() {
        return orderProId;
    }

    public void setOrderProId(long orderProId) {
        this.orderProId = orderProId;
    }

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public int getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(int orderNumber) {
        this.orderNumber = orderNumber;
    }
}
