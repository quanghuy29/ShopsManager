package com.example.shopsmanager.model;

public class OrderProductModel {
    private long orderProId;
    private long orderId;
    private long productId;
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
