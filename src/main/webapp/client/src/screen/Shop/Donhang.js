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
    let idShop = location.pathname.replace("/don-hang/",'');

    const [orders, setOrders] = useState('');
    const [customers, setCustomers] = useState('');
    const [products, setProducts] = useState('');
    const [viewOrder, setViewOrder] = useState('');

    const [newProduct, setNewProduct] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newProduct2, setNewProduct2] = useState('');
    const [newQuantity2, setNewQuantity2] = useState('');
    const [newProduct3, setNewProduct3] = useState('');
    const [newQuantity3, setNewQuantity3] = useState('');
    const [newCustomerId, setNewCustomerId] = useState('');
    const [newTotalPrice, setNewTotalPrice] = useState('');
    const [newShipingFee, setNewShipingFee] = useState('');
    const [newTotalPayment, setNewTotalPayment] = useState('');
    const [newState, setNewState] = useState('');
    const [newShipName, setNewShipName] = useState('');

    const [changeState, setChangeState] = useState('');
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

    const getCustomerPhone = (id) => {
        for(var i=0; i< customers.length; i++) {
           if (customers[i].customerId == id) return (customers[i].phone)
    }}

    const getProductName = (id) => {
        for(var i=0; i< products.length; i++) {
           if (products[i].productID == id) return (<h6 style={{marginTop: "0.1rem", marginLeft: "0.5rem"}}>{products[i].productName}</h6>)
    }}

    const getCustomerAddress = (id) => {
        for(var i=0; i< customers.length; i++) {
           if (customers[i].customerId == id) return (customers[i].address)
    }}

    const getImage = (id) => {
        for(var i=0; i< products.length; i++) {
           if (products[i].productID == id) return (products[i].image)
    }}

    const postOrder = () => {
        let date = Date();
        const postIt = {
            shopID: idShop,
            ship:
              {name: newShipName},
            orderDetail:
                 [{productID: newProduct, quantity: newQuantity}],
            customerID: newCustomerId,
            createdDay: date,
            totalPrice: newTotalPrice,
            shippingFee: newShipingFee,
            trasitionFee: 0,
            totalPayment: newTotalPayment,
            state: newState }

        if (newProduct2) {postIt.orderDetail.push({productID: newProduct2, quantity: newQuantity2})}
        if (newProduct3) {postIt.orderDetail.push({productID: newProduct3, quantity: newQuantity3})}

        axios.post('http://localhost:8080/order', postIt)
            .then(res => console.log(res))
        window.location.reload();
    }

    return (
        <div>
          <NavBarLogin />
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
              <Row>
                  <Col xs={3}><div style={{backgroundColor: "#f5f5f5", marginTop: '0rem', paddingRight: 0, paddingLeft: 0}}>
                    <h5 style={{paddingTop: '2rem'}}>
                        <a href={"/dashboard/"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Dashboard</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/don-hang/"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Đơn hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/san-pham/"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Sản phẩm</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/gian-hang/"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Gian hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/khach-hang/"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Khách hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '4.5rem'}}>
                        <a href={"/tai-khoan/"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Tài khoản</a></h5>
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
                                                <img src= {getImage(item.orderDetail.productID)} style={{width: "4rem", height: "4rem"}}/>
                                                <Row>{item.orderDetail.map(pro => getProductName(pro.productID))}</Row>
                                                </div>
                                            </Col>
                                            <Col xs={1} style={{textAlign: "left"}}>
                                                <Row>{item.orderDetail.map(pro => (<h7 style={{marginTop: "0.1rem"}}>{pro.quantity}</h7>))}</Row>
                                            </Col>
                                            <Col xs={1} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}>{item.totalPayment}</p>
                                            </Col>
                                            <Col xs={2} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}>{item.state}</p>
                                            </Col>
                                            <Col xs={2} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}>{item.ship.name}</p>
                                            </Col>
                                            <Col xs={2} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}><a onClick={() => {handleShow2(); setViewOrder(item)}}>Xem thêm</a></p>
                                            </Col>
                                    </Row>

                                )})}

                                </div>
                            </Container>
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
                            <input type="text" onChange={(event) => {setNewProduct(event.target.value)}} required/><br />
                            <label>Số lượng</label><br />
                            <input type="text" onChange={(event) => {setNewQuantity(event.target.value)}} required/><br />

                             <label>ID sản phẩm 2 (Tùy chọn)</label><br />
                            <input type="text" onChange={(event) => {setNewProduct2(event.target.value)}} required/><br />
                            <label>Số lượng</label><br />
                            <input type="text" onChange={(event) => {setNewQuantity2(event.target.value)}} required/><br />

                             <label>ID sản phẩm 3 (Tùy chọn)</label><br />
                            <input type="text" onChange={(event) => {setNewProduct3(event.target.value)}} required/><br />
                            <label>Số lượng</label><br />
                            <input type="text" onChange={(event) => {setNewQuantity3(event.target.value)}} required/><br /><br />

                            <h5>Khách hàng</h5>
                            <label>ID Khách hàng</label><br />
                            <input type="text" onChange={(event) => {setNewCustomerId(event.target.value)}} required/><br /><br />

                            <h5>Tổng giá tiền</h5>
                            <input type="number" onChange={(event) => {setNewTotalPrice(event.target.value)}} required/><br /><br />
                            <h5>Phí ship</h5>
                            <input type="number" onChange={(event) => {setNewShipingFee(event.target.value)}} required/><br /><br />
                            <h5>Tổng thanh toán</h5>
                            <input type="number" onChange={(event) => {setNewTotalPayment(event.target.value)}} required/><br /><br />

                            <h5>Đơn vị vận chuyển</h5>
                            <input type="text" onChange={(event) => {setNewShipName(event.target.value)}} required/><br /><br />
                            <h5>Trạng thái đơn hàng</h5>
                            <input type="text" onChange={(event) => {setNewState(event.target.value)}} required/><br />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={() => {handleClose(); postOrder()}}>
                            Thêm đơn hàng
                        </Button>
                </Modal.Footer>
        </Modal>
        <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
                    <Modal.Title>Xem chi tiết đơn hàng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Sản phẩm</h5>
                            {viewOrder && viewOrder.orderDetail.map((item, i) => { return(
                            <div>  
                                <p>{getProductName(item.productID)}</p>
                                <label>Số lượng</label>
                                <p>{item.quantity}</p>
                            </div> )})}
                            <h5>Khách hàng</h5>
                            <label>Tên khách hàng</label><br />
                            <p>{getCustomerName(viewOrder.customerID)}</p>
                            <label>Số điện thoại</label><br />
                            <p>{getCustomerPhone(viewOrder.customerID)}</p>
                            <label>Địa chỉ</label><br />
                            <p>{getCustomerAddress(viewOrder.customerID)}</p>

                            <h5>Đơn vị vận chuyển</h5>
                            <p>{viewOrder ? viewOrder.ship.name : " "}</p>
                            
                            <h5>Đơn hàng</h5>
                            <p>Tổng giá trị sản phẩm</p>
                            <p>{viewOrder.totalPrice}</p>
                            <p>Phí ship</p>
                            <p>{viewOrder.shippingFee}</p>
                            <p>Phí dịch vụ</p>
                            <p>{viewOrder.trasitionFee}</p>
                            <p>Tổng thanh toán</p>
                            <p>{viewOrder.totalPayment}</p>

                            <h5>Trạng thái đơn hàng</h5>
                            <p>{viewOrder.state}</p>
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