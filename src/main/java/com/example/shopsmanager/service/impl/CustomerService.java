package com.example.shopsmanager.service.impl;

import com.example.shopsmanager.converter.CustomerConverter;
import com.example.shopsmanager.dto.CustomerDTO;
import com.example.shopsmanager.dto.ListID;
import com.example.shopsmanager.dto.ResponseDTO;
import com.example.shopsmanager.model.CustomerModel;
import com.example.shopsmanager.model.OrderModel;
import com.example.shopsmanager.repository.CustomerRepository;
import com.example.shopsmanager.repository.OrderRepository;
import com.example.shopsmanager.service.iCustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class CustomerService implements iCustomerService {
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private CustomerConverter customerConverter;
    @Autowired
    private OrderRepository orderRepository;
    @Override
    public CustomerDTO save(CustomerDTO dto) {
        CustomerModel model;
        if (dto.getId() != null){
            CustomerModel oldModel = customerRepository.getById(dto.getId());
            model = customerConverter.toModel(dto, oldModel);
        } else {
            model = customerConverter.toModel(dto);
        }
        model = customerRepository.save(model);
        return customerConverter.toDTO(model);
    }

    @Override
    public CustomerDTO findOneById(Long id) {
        if(customerRepository.findById(id).isPresent()){
            CustomerModel model = customerRepository.findById(id).get();
            return customerConverter.toDTO(model);
        }
        return null;
    }

    @Override
    public List<CustomerDTO> findAllByShop(Long shopId) {
        List<CustomerDTO> listDTO = new ArrayList<>();
        List<CustomerModel> listModel = new ArrayList<>();
        List<OrderModel> listOrder = orderRepository.findAllByShopId(shopId);
        for(OrderModel item: listOrder){
            CustomerModel model = customerRepository.getById(item.getCustomerId());
            listModel.add(model);
        }

        for (CustomerModel item: listModel){
            boolean isSame = false;
            CustomerDTO dto = customerConverter.toDTO(item);
            for(CustomerDTO itemDTO: listDTO){
                if (itemDTO.getId() == dto.getId()) {
                    isSame = true;
                    break;
                }
            }
            if (!isSame)
                listDTO.add(dto);
        }
        return listDTO;
    }

    @Override
    public ResponseDTO delete(ListID listID) {
        List<Long> ids = listID.getIds();
        for(long item: ids){
            if(customerRepository.findById(item).isPresent()){
                CustomerModel model = customerRepository.findById(item).get();
                orderRepository.deleteAllByCustomerId(model.getCustomerId());
            }
            customerRepository.deleteById(item);
        }
        ResponseDTO responseDTO = new ResponseDTO();
        responseDTO.setStatus("Success");
        responseDTO.setMsg("Delete success");
        return responseDTO;
    }
}
