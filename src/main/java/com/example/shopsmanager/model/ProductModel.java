package com.example.shopsmanager.model;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
@Entity
@Table(name = "Product")
public class ProductModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long productid;
    @Column(name = "Shopid")
    private long shopId;
    @Column(name = "Categoryid")
    private long categoryId;
    @Column(name = "Productname")
    private String productName;
    @Column(name = "Detail")
    private String detail;
    @Column(name = "Price")
    private float price;
    @Column(name = "Available")
    private int available;
    @Column(name = "Createddate")
    private Date createdDay;

    @Column
    private String image;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public long getProductId() { return productid; }

    public void setProductId(long productId) {
        this.productid = productId;
    }

    public long getShopId() {
        return shopId;
    }

    public void setShopId(long shopId) {
        this.shopId = shopId;
    }

    public long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(long categoryId) {
        this.categoryId = categoryId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getAvailable() {
        return available;
    }

    public void setAvailable(int available) {
        this.available = available;
    }

    public Date getCreatedDay() {
        return createdDay;
    }

    public void setCreatedDay(Date createdDay) {
        this.createdDay = createdDay;
    }
}
