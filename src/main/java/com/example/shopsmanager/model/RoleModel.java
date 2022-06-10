package com.example.shopsmanager.model;

import javax.persistence.*;

@Entity
@Table(name = "Role")
public class RoleModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long roleid;
    @Column(name = "name")
    private String roleName;
    @Column
    private String code;

    public long getRoleId() {
        return roleid;
    }

    public void setRoleId(long roleId) {
        this.roleid = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
