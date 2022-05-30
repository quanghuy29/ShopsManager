package com.example.shopsmanager.dto;

import java.util.ArrayList;
import java.util.List;

public class ListDTO<T> {
    private List<T> listResult = new ArrayList<>();
    private int totalItem;
    public int getTotalItem() {
        return totalItem;
    }

    public void setTotalItem(int totalItem) {
        this.totalItem = totalItem;
    }

    public List<T> getListResult() {
        return listResult;
    }

    public void setListResult(List<T> listResult) {
        this.listResult = listResult;
    }
}
