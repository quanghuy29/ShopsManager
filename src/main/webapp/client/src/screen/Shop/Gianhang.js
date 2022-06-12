import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab, Modal } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Gianhang(props) {
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
  let idShop = location.pathname.replace("/gian-hang/",'');


    const [shops, setShops] = useState("");
    const [viewShop, setViewShop] = useState("");
    const [fixShop, setFixShop] = useState("");
    const [deleteShop, setDeleteShop] = useState("");

    const [fixName, setFixName] = useState("");
    const [fixAddress, setFixAddress] = useState("");
    const [fixDetail, setFixDetail] = useState("");
    const [fixPhone, setFixPhone] = useState("");
    const [fixEmail, setFixEmail] = useState(""); 
    const [fixWebsite, setFixWebsite] = useState("");
    const [fixPassword, setFixPassword] = useState("");

    const [newName, setNewName] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newDetail, setNewDetail] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newWebsite, setNewWebsite] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/shops")
    .then(res => res.json())
    .then(data => setShops(data))

  },[])

  const postShop = () => {
    const postIt = {
        shopName: newName,
        website: newWebsite,
        address: newAddress,
        detail: newDetail,
        phone: newPhone,
        email: newEmail,
        userId: idShop
        }
    axios.post('http://localhost:8080/register-shop', postIt)
        .then(res => console.log(res))
    window.location.reload();
  }


  const putShop = () => {
    var putIt ={
    userId: fixShop.userId,
    shopName: fixShop.shopName,
    website: fixShop.website,
    address: fixShop.address,
    detail: fixShop.detail,
    phone: fixShop.phone,
    password: fixShop.password,
    email: fixShop.email,
    state:fixShop.state,
    createdDay: fixShop.createdDay,
    lastRegisterDay: fixShop.lastRegisterDay,
    expirationDate: fixShop.expirationDate 
  }
    if (fixName) {putIt.shopName = fixName}
    if (fixAddress) {putIt.address = fixAddress}
    if (fixDetail) {putIt.detail = fixDetail}
    if (fixPhone) {putIt.phone = fixPhone}
    if (fixEmail) {putIt.email = fixEmail}
    if (fixWebsite) {putIt.website = fixWebsite}
    if (fixPassword) {putIt.password = fixPassword}

    axios.put('http://localhost:8080/shop/'+ fixShop.shopId, putIt)
        .then(res => console.log(res))
    window.location.reload();
  }

  const deleteShopFunction = () => {
    var deleteIt ={
        shopId: deleteShop.shopId
  }

    axios.delete('http://localhost:8080/shops', deleteIt)
        .then(res => console.log(res))
    window.location.reload();
  }
  console.log(shops);
    
    return (
        <div>
          <NavBarLogin />
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
              <Row>
                  <Col xs={3}> <div style={{backgroundColor: "#f5f5f5", marginTop: '0rem', paddingRight: 0, paddingLeft: 0}}>
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
                </div> </Col>
                  <Col xs={9}>
                    <div style={{display: "flex"}}>
                            <h3 style ={{marginRight: "33rem"}}>{shops.length} gian hàng</h3>
                            <Button variant="info" style={{marginBottom: "1rem"}} onClick={handleShow}>Thêm gian hàng</Button>
                    </div>
                    <div>
                      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title="Gian hàng">
                          <Container>
                            <Row style={{borderStyle: "ridge", backgroundColor: "#f5f5f5"}}>
                              <Col xs={3}>
                                <h5>Tên gian hàng</h5>
                              </Col>
                              <Col xs={3}>
                                <h5>Email</h5>
                              </Col>
                              <Col xs={2}>
                                <h5>Số điện thoại</h5>
                              </Col>
                              <Col xs={3} >
                                <h5>Website</h5>
                              </Col>
                              <Col xs={1}>
                                <h5>Thao tác</h5>
                              </Col>
                            </Row>

                            {shops && shops.map( (shop) => {return(
                            <div>
                                <Row style={{borderStyle: "ridge"}}>
                                  <Col xs={3}>
                                    <p>{shop.shopName}</p>
                                  </Col>
                                  <Col xs={3}>
                                    <p>{shop.email}</p>
                                  </Col>
                                  <Col xs={2}>
                                    <p>{shop.phone}</p>
                                  </Col>
                                  <Col xs={2}>
                                    <p style={{whiteSpace: "nowrap", width: "10.5rem", overflow: "hidden", textOverflow: "ellipsis"}}>{shop.website}</p>
                                  </Col>
                                  <Col xs={2}>
                                    <p  style={{marginBottom: "0.1rem"}} onClick={() => {handleShow3();setViewShop(shop)}}>Xem thêm</p>
                                    <p style={{marginBottom: "0.1rem"}} onClick={() => {handleShow2();setFixShop(shop);}}>Sửa</p>
                                    <p  style={{marginBottom: "0.1rem"}} onClick={() => {setDeleteShop(shop); deleteShopFunction()}}>Xóa</p> 
                                  </Col>
                                </Row>
                            </div>)})}


                          </Container>
                        </Tab>
                      </Tabs>
                    </div>
                </Col>
            </Row>
        </Container>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title>Thêm gian hàng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Thêm gian hàng</h5>
                            <label>Tên shop</label><br />
                            <input type="text" onChange={(event) =>setNewName(event.target.value)}/><br />

                            <label>Website</label><br />
                            <input type="text" onChange={(event) =>setNewWebsite(event.target.value)}/><br />

                            <label>Email</label><br />
                            <input type="text" onChange={(event) =>setNewEmail(event.target.value)}/><br />

                            <label>Số điện thoại</label><br />
                            <input type="number" onChange={(event) =>setNewPhone(event.target.value)}/><br />

                            <label>Địa chỉ</label><br />
                            <input type="text" onChange={(event) =>setNewAddress(event.target.value)}/><br />
                            
                            <label>Thông tin thêm</label><br />
                            <input type="text" onChange={(event) =>setNewDetail(event.target.value)}/><br />

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Thêm gian hàng
                        </Button>
                </Modal.Footer>
        </Modal>


        <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa gian hàng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Chỉnh sửa gian hàng</h5>
                            <label>Tên shop</label><br />
                            <input type="text" placeholder={fixShop.shopName} onChange={(event) =>setFixName(event.target.value)}/><br />

                            <label>Website</label><br />
                            <input type="text" placeholder={fixShop.website} onChange={(event) =>setFixWebsite(event.target.value)}/><br />

                            <label>Email</label><br />
                            <input type="text" placeholder={fixShop.email} onChange={(event) =>setFixEmail(event.target.value)}/><br />

                            <label>Số điện thoại</label><br />
                            <input type="number" placeholder={fixShop.phone} onChange={(event) =>setFixPhone(event.target.value)}/><br />

                            <label>Địa chỉ</label><br />
                            <input type="text" placeholder={fixShop.address} onChange={(event) =>setFixDetail(event.target.value)}/><br />
                                                        
                            <label>Thông tin thêm</label><br />
                            <input type="text" placeholder={fixShop.detail} onChange={(event) =>setFixDetail(event.target.value)}/><br />

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={() => {handleClose2(); putShop()}}>
                            Chỉnh sửa gian hàng
                        </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={show3} onHide={handleClose3}>
            <Modal.Header closeButton>
                    <Modal.Title>Xem chi tiết gian hàng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label>Tên shop</label><br />
                            <h6>{viewShop.shopName}</h6>

                            <label>Website</label><br />
                            <h6>{viewShop.website}</h6>

                            <label>Email</label><br />
                            <h6>{viewShop.email}</h6>

                            <label>Số điện thoại</label><br />
                            <h6>{viewShop.phone}</h6>
                            
                            <label>Địa chỉ</label><br />
                            <h6>{viewShop.address}</h6>
                            
                            <label>Thông tin thêm</label><br />
                            <h6>{viewShop.detail}</h6>

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