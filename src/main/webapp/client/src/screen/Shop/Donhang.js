import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab, Modal } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Donhang(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    let location = useLocation();
    let idShop = location.pathname.replace("don-hang/",'');
    const [orders, setOrders] = useState('');
    const [customers, setCustomers] = useState('');
    const [products, setProducts] = useState('');
    useEffect(() => {
    fetch("http://localhost:8080/orders")
    .then(res => res.json())
    .then(data => setOrders(data))

    fetch("http://localhost:8080/customers")
    .then(res => res.json())
    .then(data => setCustomers(data))

    fetch("http://localhost:8080/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

    const getCustomerName = (id) => {
        for(var i=0; i< customers.length; i++) {
           if (customers[i].customerId == id) return (customers[i].firstName + " " + customers[i].lastName)
    }}

    const getProductName = (id) => {
        for(var i=0; i< products.length; i++) {
           if (products[i].productID == id) return (<h6 style={{marginTop: "0.1rem", marginLeft: "0.5rem"}}>{products[i].productName}</h6>)
    }}

    const getImage = (id) => {
        for(var i=0; i< products.length; i++) {
           if (products[i].productID == id) return (products[i].image)
    }}
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
                </div></Col>
                  <Col xs={9}>
                    <Tabs defaultActiveKey="tatCa" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="tatCa" title="Tất cả">
                            <div style={{display: "flex"}}>
                                <h3 style ={{marginRight: "33rem"}}>{orders.length} Đơn hàng</h3>
                                <Button variant="info" style ={{marginBottom: "1rem"}} onClick={handleShow}>Thêm đơn hàng mới</Button>
                            </div>
                            <Container>
                                <Row style={{backgroundColor: "#f5f5f5", padding: "0.5rem", paddingBottom: "1rem", paddingTop: "1rem"}}>
                                    <Col xs={4} style={{textAlign: "left"}}>Sản phẩm</Col>
                                    <Col xs={1} style={{textAlign: "left"}}>Số lượng</Col>
                                    <Col xs={1} style={{textAlign: "left"}}>Tổng đơn</Col>
                                    <Col xs={2} style={{textAlign: "left"}}>Trạng thái</Col>
                                    <Col xs={2} style={{textAlign: "left"}}>Vận chuyển</Col>
                                    <Col xs={2} style={{textAlign: "left"}}>Thao tác</Col>
                                </Row>
                                <div>
                                {orders && orders.map((item, i) =>{
                                return(
                                        <Row style={{borderStyle: "ridge", backgroundColor: "#f5f5f5", marginTop: "1rem"}}>
                                            <p style={{textAlign: "left", marginBottom: "0.1rem"}}>{getCustomerName(item.customerID)}</p>

                                            <Col xs={4} style={{textAlign: "left"}}>
                                                <div style={{display: "flex"}}>
                                                <img src= {getImage(item.product[0].productID)} style={{width: "4rem", height: "4rem"}}/>
                                                <Row>{item.product.map(pro => getProductName(pro.productID))}</Row>
                                                </div>
                                            </Col>
                                            <Col xs={1} style={{textAlign: "left"}}>
                                                <Row>{item.product.map(pro => (<h7 style={{marginTop: "0.1rem"}}>{pro.quantity}</h7>))}</Row>
                                            </Col>
                                            <Col xs={1} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}>{item.totalPayment}</p>
                                            </Col>
                                            <Col xs={2} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}>{item.state}</p>
                                            </Col>
                                            <Col xs={2} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}>{item.shipingUnit}</p>
                                            </Col>
                                            <Col xs={2} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}><a onClick={handleShow2}>Xem thêm</a></p>
                                            </Col>
                                    </Row>

                                )})}

                                </div>
                            </Container>
                      </Tab>
                      <Tab eventKey="choXacNhan" title="Chờ xác nhận">
                      </Tab>
                      <Tab eventKey="choLayHang" title="Chờ lấy hàng">
                      </Tab>
                      <Tab eventKey="dangGiao" title="Đang giao">
                      </Tab>
                      <Tab eventKey="traHang" title="Trả hàng/ hoàn tiền">
                      </Tab>
                      <Tab eventKey="huy" title="Đã hủy">
                      </Tab>
                    </Tabs>

                </Col>
            </Row>
        </Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title>Thêm đơn hàng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Sản phẩm</h5>
                            <label>ID sản phẩm</label><br />
                            <input type="text" /><br />
                            <label>Số lượng</label><br />
                            <input type="text" /><br /><br />
                            <h5>Khách hàng</h5>
                            <label>Tên khách hàng</label><br />
                            <input type="text" /><br />
                            <label>Số điện thoại</label><br />
                            <input type="number" /><br />
                            <label>Địa chỉ</label><br />
                            <input type="text" /><br />

                            <h5>Đơn vị vận chuyển</h5>
                            <input type="text" /><br />
                            <h5>Trạng thái đơn hàng</h5>
                            <input type="text" /><br />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Thêm đơn hàng
                        </Button>
                </Modal.Footer>
        </Modal>
        <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
                    <Modal.Title>Thêm đơn hàng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Sản phẩm</h5>
                            <label>ID sản phẩm</label><br />
                            <input type="text" /><br />
                            <label>Số lượng</label><br />
                            <input type="text" /><br /><br />
                            <h5>Khách hàng</h5>
                            <label>Tên khách hàng</label><br />
                            <input type="text" /><br />
                            <label>Số điện thoại</label><br />
                            <input type="number" /><br />
                            <label>Địa chỉ</label><br />
                            <input type="text" /><br />

                            <h5>Đơn vị vận chuyển</h5>
                            <input type="text" /><br />
                            <h5>Trạng thái đơn hàng</h5>
                            <input type="text" /><br />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Thoát
                        </Button>
                </Modal.Footer>
        </Modal>
        </div>
    )
}