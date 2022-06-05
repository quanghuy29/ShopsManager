package com.example.shopsmanager.service.impl;

import com.example.shopsmanager.converter.ProductConverter;
import com.example.shopsmanager.dto.ProductDTO;
import com.example.shopsmanager.model.ProductModel;
import com.example.shopsmanager.repository.OrderProductRepository;
import com.example.shopsmanager.repository.ProductRepository;
import com.example.shopsmanager.service.iProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService implements iProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ProductConverter productConverter;
    @Autowired
    private OrderProductRepository orderProductRepository;
    @Override
    public ProductDTO save(ProductDTO productDTO) {
        ProductModel model;
        if (productDTO.getId() != null) {
            ProductModel oldModel = productRepository.getById(productDTO.getId());
            model = productConverter.toModel(productDTO, oldModel);
        } else {
            model = productConverter.toModel(productDTO);
        }
        model = productRepository.save(model);
        return productConverter.toDTO(model);
    }

    @Override
    public ProductDTO findOneById(Long id) {
        if(productRepository.findById(id).isPresent())
        {
            ProductModel model = productRepository.findById(id).get();
            return productConverter.toDTO(model);
        }
        else return null;
    }

    @Override
    public void delete(long[] ids) {
        for(long item: ids){
            if (productRepository.findById(item).isPresent())
            {
                ProductModel model = productRepository.findById(item).get();
                orderProductRepository.deleteAllByProductId(model.getProductId());
            }
            productRepository.deleteById(item);
        }
    }

    @Override
    public List<ProductDTO> findAll() {
        List<ProductDTO> listDTO = new ArrayList<>();
        List<ProductModel> listModel = productRepository.findAll();
        for(ProductModel item: listModel){
            ProductDTO dto = productConverter.toDTO(item);
            listDTO.add(dto);
        }
        return listDTO;
    }

    @Override
    public List<ProductDTO> findAllByShop(Long shopId) {
        List<ProductDTO> listDTO = new ArrayList<>();
        List<ProductModel> listModel = productRepository.findAllByShopId(shopId);
        for(ProductModel item: listModel){
            ProductDTO dto = productConverter.toDTO(item);
            listDTO.add(dto);
        }
        return listDTO;
    }
}
