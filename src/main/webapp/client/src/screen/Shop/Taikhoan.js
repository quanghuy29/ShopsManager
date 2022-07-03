import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab, Modal } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Taikhoan(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [user, setUser] = useState("");
    const [shops, setShops] = useState("");
    const [putShop, setPutShop] = useState("");

    const [fixName, setFixName] = useState("");
    const [fixPhone, setFixPhone] = useState("");
    const [fixFName, setFixFName] = useState("");
    const [fixLName, setFixLName] = useState("");
    const [fixDetail, setFixDetail] = useState("");
    const [fixAddress, setFixAddress] = useState("");
    const [fixPassword, setFixPassword] = useState("");
    const [fixEmail, setFixEmail] = useState("");

    const [upShopName, setUpShopName] = useState("");

  useEffect(() => {
    var idPost;
      if(userLocal) { idPost = userLocal.userId}
        fetch("http://localhost:8080/ShopsManager_war_exploded/user/" + idPost )
        .then(res => res.json())
        .then(data => setUser(data))

        fetch("http://localhost:8080/ShopsManager_war_exploded/shop/" + idShop)
        .then(res => res.json())
        .then(data => setShops(data))
      },[])

      let idShop;
      const dataLocal = localStorage.getItem('user');
      const userLocal  = JSON.parse(dataLocal);
      if (userLocal  && userLocal.role == "shop") { idShop= userLocal.shopId[0]} else {return <Navigate to={"/login"}  />};

  const putUser = () => {
    var putIt = {
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      email: user.email,
      password: user.password
    }

    if (fixPhone) {putIt.phone = fixPhone}
    if (fixFName) {putIt.firstName = fixFName}
    if (fixLName) {putIt.lastName = fixLName}
    if (fixPassword) {putIt.password = fixPassword}
    if (fixEmail) {putIt.email = fixEmail}

    axios.put('http://localhost:8080/ShopsManager_war_exploded/user/'+ user.userId, putIt)
        .then(res => console.log(res))
    window.location.reload();
  }

    var date  = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var dt = date.getDate();
   
    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
   
    const today = (year+'-' + month + '-'+dt);

  const updateShopFunction = () => {
    const updateIt = {
            userID: shops.userID,
            shopName: putShop.shopName,
            website: shops.website,
            address: shops.address,
            detail: shops.detail,
            phone: shops.phone,
            email: shops.email,
            state: shops.state,
            createdDay: today,
            lastRegisterDay: shops.lastRegisterDay,
            expirationDate: shops.expirationDate
            }

    if (upShopName) {updateIt.shopName = upShopName}

    console.log(updateIt);
    axios.put('http://localhost:8080/ShopsManager_war_exploded/shop/' + idShop, updateIt)
        .then(res => console.log(res))
    window.location.reload();
}


    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div>
          <NavBarLogin />
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
              <Row>
                  <Col xs={3}> <div style={{paddingBottom: "11rem", backgroundColor: "#f5f5f5", marginTop: '6rem', position: "fixed", paddingLeft: "7rem", paddingRight: "7rem",position: "fixed", zIndex: 999}}>
                    <h5 style={{paddingTop: '2rem'}}>
                        <a href={"/dashboard"} style = {{textDecoration: 'none', color: '#221e1e'}}>Dashboard</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/don-hang"} style = {{textDecoration: 'none', color: '#221e1e'}}>Đơn hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/san-pham"} style = {{textDecoration: 'none', color: '#221e1e'}}>Sản phẩm</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/khach-hang"} style = {{textDecoration: 'none', color: '#221e1e'}}>Khách hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '4.5rem'}}>
                        <a href={"/tai-khoan"} style = {{textDecoration: 'none', color: '#221e1e'}}>Tài khoản</a></h5>
                </div> </Col>
                  <Col xs={9} style={{marginTop: "6rem"}}>
                    <h2>Tài khoản</h2>
                    <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>User:</h5>
                      <h5>{user.firstName + " " + user.lastName}</h5>
                    </div>
                    <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>Shop name:</h5>
                      <h5>{shops.shopName}</h5>
                    </div>
                    <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>Email:</h5>
                      <h5>{user.email}</h5>
                    </div>
                    <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>Số điện thoại:</h5>
                      <h5>{user.phone}</h5>
                    </div>

                    <Button variant="outline-info" size="lg" onClick={handleShow}>Sửa thông tin</Button>
                    <Button variant="danger" size="lg" onClick={logOut}>Đăng xuất</Button>
                </Col>
            </Row>
        </Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title>Thay đổi thông tin</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label>First Name</label><br />
                            <input type="text" placeholder={user.firstName} onChange={(event) =>setFixFName(event.target.value)} /><br />

                            <label>Last Name</label><br />
                            <input type="text" placeholder={user.lastName} onChange={(event) =>setFixLName(event.target.value)} /><br />

                            <label>Shop Name</label><br />
                            <input type="text" placeholder={shops.shopName} onChange={(event) =>setUpShopName(event.target.value)} /><br />

                            <label>Số điện thoại</label><br />
                            <input type="text" placeholder={user.phone} onChange={(event) =>setFixPhone(event.target.value)} /><br /><br />

                            <label>Email</label><br />
                            <input type="email" placeholder={user.email} onChange={(event) =>setFixEmail(event.target.value)} /><br />
                            {console.log(user.email)}

                            <label>Mật khẩu</label><br />
                            <input type="password" onChange={(event) =>setFixPassword(event.target.value)} /><br />

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={() => {handleClose(); putUser(); updateShopFunction()}}>
                            Hoàn tất
                        </Button>
                </Modal.Footer>
        </Modal>
        </div>
    )
}