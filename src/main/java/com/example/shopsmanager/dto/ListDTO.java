package com.example.shopsmanager.dto;

import java.util.ArrayList;
import java.util.List;

public class ListDTO<T> {
    private List<T> listResult = new ArrayList<>();
    private int totalItem;
    public int getTotalItem() {
        return totalItem;
    }

    public void setTotalItem() {
        this.totalItem = listResult.size();
    }

    public List<T> getListResult() {
        return listResult;
    }

    public void setListResult(List<T> listResult) {
        this.listResult = listResult;
    }
}
