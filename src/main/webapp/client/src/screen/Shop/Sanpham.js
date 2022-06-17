import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab, Card,Modal, Image } from 'react-bootstrap';
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

  const [products, setProducts] = useState('');
  const [viewProduct, setViewProduct] = useState('');
  const [fixProduct, setFixProduct] = useState('');

  const [newCategory, setNewCategory] = useState('');
  const [newProductName, setNewProductName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newAvailable, setNewAvailable] = useState('');
  const [newDetail, setNewDetail] = useState('');
  const [image, setNewImage] = useState('');

  // update product
  const [fixPrice, setFixPrice] = useState('');
  const [fixCategory, setFixCategory] = useState('');
  const [fixProductName, setFixProductName] = useState('');
  const [fixDetail, setFixDetail] = useState('');
  const [fixImage, setFixImage] = useState('');
  const [fixAvailable, setFixAvailable] = useState('');

  const [deleteProduct, setDeleteProduct] = useState('');

  // get product
    useEffect(() => {
        fetch("http://localhost:8080/products")
        .then(res => res.json())
        .then(data => setProducts(data))
      },[])

    let idShop;
    const dataLocal = localStorage.getItem('user');
    const userLocal  = JSON.parse(dataLocal);
    if (userLocal  && userLocal.role == "shop") { idShop= userLocal.userId} else {return <Navigate to={"/login"}  />};

  const postProduct = () => {
    let date = Date();
    const postIt = {
        shopid: idShop, 
        category: newCategory, 
        productName: newProductName, 
        detail: newDetail, 
        price: newPrice, 
        image: image, 
        available: newAvailable, 
        createdDay: date}

    axios.post('http://localhost:8080/product', postIt)
        .then(res => console.log(res))
  }

  const updateProduct = () => {
    const putIt = {
        productID: fixProduct.productID, 
        shopid: fixProduct.shopid, 
        category: fixProduct.category, 
        productName: fixProduct.productName, 
        detail: fixProduct.detail, 
        price: fixProduct.price, 
        image: fixProduct.image, 
        available: fixProduct.available, 
        createdDay: fixProduct.createdDay}

    if (fixPrice) {putIt.price = fixPrice}
    if (fixDetail) {putIt.detail = fixDetail}
    if (fixProductName) {putIt.productName = fixProductName}
    if (fixImage) {putIt.image = fixImage}
    if (fixAvailable) {putIt.available = fixAvailable}
    if (fixCategory) {putIt.category = fixCategory}


    axios.put('http://localhost:8080/product/'+ fixProduct.productID, putIt)
        .then(res => console.log(res))
  }
// delete product
    
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
                  <Col xs={3}> <div style={{backgroundColor: "#f5f5f5", marginTop: '0rem', paddingRight: 0, paddingLeft: 0}}>
                    <h5 style={{paddingTop: '2rem'}}>
                        <a href={"/dashboard"} style = {{textDecoration: 'none', color: '#221e1e'}}>Dashboard</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/don-hang"} style = {{textDecoration: 'none', color: '#221e1e'}}>Đơn hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/san-pham"} style = {{textDecoration: 'none', color: '#221e1e'}}>Sản phẩm</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/gian-hang"} style = {{textDecoration: 'none', color: '#221e1e'}}>Gian hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/khach-hang"} style = {{textDecoration: 'none', color: '#221e1e'}}>Khách hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '4.5rem'}}>
                        <a href={"/tai-khoan"} style = {{textDecoration: 'none', color: '#221e1e'}}>Tài khoản</a></h5>
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
                                <Button variant="info" size="sm" style={{marginRight: "0.3rem"}} onClick={() => {handleShow3(); setViewProduct(pro)}}>Xem</Button>
                                <Button variant="outline-info" size="sm" onClick={() => {handleShow2(); setFixProduct(pro)}}>Sửa</Button>
                                <Button variant="info" size="sm" style={{marginLeft: "0.3rem"}} onClick={() => {deleteProductFunction(); setDeleteProduct(pro.productID)}}>Xóa</Button>
                              </Card.Body>
                            </Card>)})}
                          </Row>
                        </div>
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
                            <input type="text" onChange={(event) =>setNewCategory(event.target.value)} required/><br />

                            <label>Tên sản phẩm</label><br />
                            <input type="text"  onChange={(event) =>setNewProductName(event.target.value)} required/><br /><br />

                            <label>Mô tả sản phẩm</label><br />
                            <input type="text"  onChange={(event) =>setNewDetail(event.target.value)} required/><br />

                            <label>Giá</label><br />
                            <input type="text"  onChange={(event) =>setNewPrice(event.target.value)} required/><br />

                            <label>Tồn kho</label><br />
                            <input type="number"  onChange={(event) =>setNewAvailable(event.target.value)} required/><br />
                        
                            <h5>Hình ảnh</h5>
                            <input type="file"  onChange={(event) =>setNewImage(event.target.value)} required/><br />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={() => {handleClose(); postProduct()}}>
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
                            <input type="text" placeholder={fixProduct.category} onChange={(event) =>setFixCategory(event.target.value)}/><br />
                            <label>Mã shop</label><br />
                            <input type="text" value={fixProduct.shopid}></input><br />
                            <label>Tên sản phẩm</label><br />
                            <input type="text" placeholder={fixProduct.productName} onChange={(event) =>setFixProductName(event.target.value)}/><br /><br />

                            <label>Mô tả sản phẩm</label><br />
                            <input type="text" placeholder={fixProduct.detail} onChange={(event) =>setFixDetail(event.target.value)}/><br />

                            <label>Giá</label><br />
                            <input type="text" placeholder={fixProduct.price} onChange={(event) =>setFixPrice(event.target.value)}/><br />

                            <label>Tồn kho</label><br />
                            <input type="number" placeholder={fixProduct.available} onChange={(event) =>setFixAvailable(event.target.value)}/><br />
                            

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
                            <label>Ngành hàng</label><br />
                            <p>{viewProduct.category}</p><br />

                            <label>ID sản phẩm</label><br />
                            <p>{viewProduct.productID}</p><br />

                            <label>Tên sản phẩm</label><br />
                            <p>{viewProduct.productName}</p><br />

                            <label>Mô tả sản phẩm</label><br />
                            <p>{viewProduct.detail}</p><br />

                            <label>Giá</label><br />
                            <p>{viewProduct.price}</p><br />

                            <label>Tồn kho</label><br />
                            <p>{viewProduct.available}</p><br />
                            

                            <h5>Hình ảnh</h5>
                            <img src={viewProduct.image} style={{height: "10rem", width: "10rem"}}/>
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