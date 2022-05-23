package com.example.shopsmanager.model;

import javax.persistence.*;

@Entity
@Table(name = "Department")
public class DepartmentModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long departId;
    @Column(name = "DepartName")
    private String departName;

    public long getDepartId() {
        return departId;
    }

    public void setDepartId(long departId) {
        this.departId = departId;
    }

    public String getDepartName() {
        return departName;
    }

    public void setDepartName(String departName) {
        this.departName = departName;
    }
}
