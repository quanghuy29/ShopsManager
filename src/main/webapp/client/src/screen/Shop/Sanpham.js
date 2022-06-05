import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab, Card,Modal } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Sanpham(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    
    let location = useLocation();
  let idShop = location.pathname.replace("san-pham/",'');

  const [products, setProducts] = useState('');
  const [viewProduct, setViewProduct] = useState('');

  // get product
    useEffect(() => {
        fetch("http://localhost:8080/products")
        .then(res => res.json())
        .then(data => setProducts(data))
      },[])

// update product
  const [fixPrice, setFixPrice] = useState('');
  const [fixCategory, setFixCategory] = useState('');
  const [fixProductName, setFixProductName] = useState('');
  const [fixDetail, setFixDetail] = useState('');
  const [fixImage, setFixImage] = useState('');
  const [fixAvailable, setFixAvailable] = useState('');

  const updateProduct = () => {
    axios.put('http://localhost:8080/product/'+ viewProduct.productID, {productID: viewProduct.productID, shopid: viewProduct.shopid, category: fixCategory, productName: fixProductName, detail: fixDetail, price: fixPrice, image: setFixImage, available: fixAvailable, createdDay: viewProduct.createdDay})
        .then(res => console.log(res))
  }
// delete product
    const [deleteProduct, setDeleteProduct] = useState('');
    const deleteProductFunction = () => {
    axios.delete('http://localhost:8080/product/'+ deleteProduct, {productID: deleteProduct})
        .then(res => console.log(res))
  }
  
  console.log(products)
    return (
        <div>
          <NavBarLogin />
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
              <Row>
                  <Col xs={3}><div style={{backgroundColor: "#f5f5f5", marginTop: '0rem', paddingRight: 0, paddingLeft: 0}}>
                    <h5 style={{paddingTop: '2rem'}}>
                        <a href={"/dashboard"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Dashboard</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/don-hang"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Đơn hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/san-pham"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Sản phẩm</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/gian-hang"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Gian hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/khach-hang"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Khách hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '4.5rem'}}>
                        <a href={"/tai-khoan"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Tài khoản</a></h5>
                </div> </Col>
                  <Col xs={9}>
                    <Tabs defaultActiveKey="tatCa" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="tatCa" title="Tất cả">
                        <div style={{display: "flex"}}>
                            <h3 style ={{marginRight: "33rem"}}>{products.length} sản phẩm</h3>
                            <Button variant="info" style={{marginBottom: "1rem"}} onClick={handleShow}>Thêm sản phẩm mới</Button>
                        </div>
                        <div>
                          <Row>
                          { products && products.map((pro, i) => { return (
                            <Card style={{ width: '11.5rem', height: "18rem", marginRight: "0.8rem", marginBottom: "1rem"}} >
                              <Card.Img variant="top" src={pro.image} style={{ width: '9rem', height: "9rem"}}/>
                              <Card.Body style= {{paddingLeft: 0}}>
                                <h6 style= {{ whiteSpace: "nowrap", width: "10.5rem", overflow: "hidden", textOverflow: "ellipsis"}}>{pro.productName}</h6>
                                <div style={{display: "flex"}}>
                                  <h9 style={{textAlign: "left", marginRight: "0.8rem"}}>{pro.price}đ</h9>
                                  <h9 style={{textAlign: "right"}}>Stock: {pro.available}</h9>
                                </div>
                                <Button variant="info" size="sm" style={{marginRight: "0.3rem"}} onClick={handleShow3}>Xem</Button>
                                <Button variant="outline-info" size="sm" onClick={() => {handleShow2(); setViewProduct(pro)}}>Sửa</Button>
                                <Button variant="info" size="sm" style={{marginLeft: "0.3rem"}} onClick={() => {deleteProductFunction(); setDeleteProduct(pro.productID)}}>Xóa</Button>
                              </Card.Body>
                            </Card>)})}
                          </Row>
                        </div>
                      </Tab>
                      <Tab eventKey="dangHoatDong" title="Đang hoạt động">
                      </Tab>
                      <Tab eventKey="hetHang" title="Hết hàng">
                      </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title>Thêm sản phẩm</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Thêm sản phẩm</h5>
                            <label>Ngành hàng</label><br />
                            <input type="text" /><br />

                            <label>Tên sản phẩm</label><br />
                            <input type="text" /><br /><br />

                            <label>Mô tả sản phẩm</label><br />
                            <input type="text" /><br />

                            <label>Giá</label><br />
                            <input type="text" /><br />

                            <label>Tồn kho</label><br />
                            <input type="number" /><br />
                            

                            <h5>Hình ảnh</h5>
                            <input type="file" /><br />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Thêm sản phẩm
                        </Button>
                </Modal.Footer>
        </Modal>
        <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa sản phẩm</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Thêm sản phẩm</h5>
                            <label>Ngành hàng</label><br />
                            <input type="text" placeholder={viewProduct.category} onChange={(data) =>setFixCategory(data)}/><br />
                            <label>Mã shop</label><br />
                            <input type="text" value={viewProduct.shopid}></input><br />
                            <label>Tên sản phẩm</label><br />
                            <input type="text" placeholder={viewProduct.productName} onChange={(data) =>setFixProductName(data)}/><br /><br />

                            <label>Mô tả sản phẩm</label><br />
                            <input type="text" placeholder={viewProduct.detail} onChange={(data) =>setFixDetail(data)}/><br />

                            <label>Giá</label><br />
                            <input type="text" placeholder={viewProduct.price} onChange={(data) =>setFixPrice(data)}/><br />

                            <label>Tồn kho</label><br />
                            <input type="number" placeholder={viewProduct.available} onChange={(data) =>setFixAvailable(data)}/><br />
                            

                            <h5>Hình ảnh</h5>
                            <input type="file" onChange={(data) =>setFixImage(data)}/><br />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={() => {handleClose2(); updateProduct()}}>
                            Sửa sản phẩm
                        </Button>
                </Modal.Footer>
        </Modal>
        <Modal show={show3} onHide={handleClose3}>
            <Modal.Header closeButton>
                    <Modal.Title>Xem sản phẩm</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Thêm sản phẩm</h5>
                            <label>Ngành hàng</label><br />
                            <p></p><br />

                            <label>Tên sản phẩm</label><br />
                            <input type="text" /><br /><br />

                            <label>Mô tả sản phẩm</label><br />
                            <p></p><br />

                            <label>Giá</label><br />
                            <p></p><br />

                            <label>Tồn kho</label><br />
                            <p></p><br />
                            

                            <h5>Hình ảnh</h5>
                            <input type="file" /><br />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose3}>
                            Thoát
                        </Button>
                </Modal.Footer>
        </Modal>
      
        </div>
    )
}