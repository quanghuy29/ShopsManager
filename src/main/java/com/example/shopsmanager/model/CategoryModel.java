package com.example.shopsmanager.model;

import javax.persistence.*;

@Entity
@Table(name = "Category")
public class CategoryModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long categoryid;
    @Column(name = "categoryname")
    private String categoryName;
    @Column()
    private String description;

    public long getCategoryId() {
        return categoryid;
    }

    public void setCategoryId(long categoryId) {
        this.categoryid = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
