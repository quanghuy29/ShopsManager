package com.example.shopsmanager.service.impl;

import com.example.shopsmanager.converter.ShopConverter;
import com.example.shopsmanager.dto.ShopDTO;
import com.example.shopsmanager.model.OrderModel;
import com.example.shopsmanager.model.OrderProductModel;
import com.example.shopsmanager.model.ProductModel;
import com.example.shopsmanager.model.ShopModel;
import com.example.shopsmanager.repository.*;
import com.example.shopsmanager.service.iShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
@Transactional
@Service
public class ShopService implements iShopService {
    @Autowired
    private ShopRepository shopRepository;
    @Autowired
    private RegisterOrderRepo registerOrderRepo;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderProductRepository orderProductRepository;
    @Autowired
    private ShopConverter shopConverter;
    @Override
    public ShopDTO save(ShopDTO dto) {
        ShopModel model = new ShopModel();
        if (dto.getShopId() != null){
            ShopModel oldModel = shopRepository.getById(dto.getShopId());
            model = shopConverter.toModel(dto, oldModel);
        } else {
            model = shopConverter.toModel(dto);
        }
        model = shopRepository.save(model);
        return shopConverter.toDTO(model);
    }

    @Override
    public ShopDTO findOneById(Long id) {
        if(shopRepository.findById(id).isPresent()){
            ShopModel model = shopRepository.findById(id).get();
            return shopConverter.toDTO(model);
        }
        return null;
    }

    @Override
    public void delete(long[] ids) {
        for(long item: ids){
            ShopModel shop = shopRepository.getById(item);
            List<OrderModel> listOrder = orderRepository.findAllByShopId(shop.getShopId());
            List<ProductModel> listProduct = productRepository.findAllByShopId(shop.getShopId());
            for(OrderModel order: listOrder){
                orderProductRepository.deleteAllByOrderId(order.getOrderId());
            }
            for(ProductModel product: listProduct){
                orderProductRepository.deleteAllByProductId(product.getProductId());
            }
            registerOrderRepo.deleteAllByShopId(shop.getShopId());
            orderRepository.deleteAllByShopId(shop.getShopId());
            productRepository.deleteAllByShopId(shop.getShopId());
            shopRepository.deleteById(item);
        }
    }

    @Override
    public List<ShopDTO> findAll() {
        List<ShopDTO> listDTO = new ArrayList<>();
        List<ShopModel> listModel = shopRepository.findAll();
        for(ShopModel item: listModel){
            ShopDTO dto = shopConverter.toDTO(item);
            listDTO.add(dto);
        }
        return listDTO;
    }
}
