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

    let location = useLocation();
  let idShop = location.pathname.replace("/tai-khoan/",'');
  const [user, setUser] = useState("");

  const [fixName, setFixName] = useState("");
  const [fixPhone, setFixPhone] = useState("");
  const [fixDetail, setFixDetail] = useState("");
  const [fixAddress, setFixAddress] = useState("");
  const [fixPassword, setFixPassword] = useState("");
  const [fixEmail, setFixEmail] = useState("");



  useEffect(() => {
        fetch("http://localhost:8080/user")
        .then(res => res.json())
        .then(data => setUser(data[0]))
      },[])
  const putUser = () => {
    var putIt = {
    shopId: user.shopId,
    userId: user.userId,
    shopName: user.shopName,
    website: user.website,
    address: user.address,
    detail: user.detail,
    phone: user.phone,
    email: user.email,
    password: user.password,
    state: user.state,
    createdDay: user.createdDay,
    lastRegisterDay: user.lastRegisterDay,
    expirationDate: user.expirationDate
    }
    if (fixName) {putIt.shopName = fixName}
    if (fixPhone) {putIt.phone = fixPhone}
    if (fixDetail) {putIt.detail = fixDetail}
    if (fixAddress) {putIt.address = fixAddress}
    if (fixPassword) {putIt.password = fixPassword}
    if (fixEmail) {putIt.email = fixEmail}

    axios.put('http://localhost:8080/user/'+ user.userId, putIt)
        .then(res => console.log(res))
  }
    console.log(user)
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
                    <h2>Tài khoản</h2>
                    <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>Shop:</h5>
                      <h5>{user.shopName}</h5>
                    </div>
                    <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>Email:</h5>
                      <h5>{user.email}</h5>
                    </div>
                    <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>Số điện thoại:</h5>
                      <h5>{user.phone}</h5>
                    </div>
                      <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>Địa chỉ:</h5>
                      <h5>{user.address}</h5>
                    </div>
                    <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>Thông tin thêm:</h5>
                      <h5 style={{float: "left", textAlign: "left"}}>{user.detail}</h5>
                    </div>
                    <Button variant="outline-info" size="lg" onClick={handleShow}>Sửa thông tin</Button>
                    <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem", marginTop: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>Hạn sử dụng:</h5>
                      <h5 style={{marginRight: "3rem"}}>{user.expirationDate}</h5>
                      <Button variant="outline-info" size="sm"  href="/phuong-thuc-thanh-toan">Gia hạn</Button>
                    </div>
                    <Button variant="danger" size="lg">Đăng xuất</Button>
                </Col>
            </Row>
        </Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title>Thay đổi thông tin</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label>Tên shop</label><br />
                            <input type="text" placeholder={user.shopName} onChange={(event) =>setFixName(event.target.value)} /><br />

                            <label>Số điện thoại</label><br />
                            <input type="text" placeholder={user.phone} onChange={(event) =>setFixPhone(event.target.value)} /><br /><br />

                            <label>Email</label><br />
                            <input type="email" placeholder={user.email} onChange={(event) =>setFixEmail(event.target.value)} /><br />

                            <label>Địa chỉ</label><br />
                            <input type="text" placeholder={user.address} onChange={(event) =>setFixAddress(event.target.value)} /><br />

                            <label>Thông tin</label><br />
                            <input type="text" placeholder={user.detail} onChange={(event) =>setFixDetail(event.target.value)} /><br />

                            <label>Mật khẩu</label><br />
                            <input type="password" onChange={(event) =>setFixPassword(event.target.value)} /><br />

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={() => {handleClose(); putUser()}}>
                            Hoàn tất
                        </Button>
                </Modal.Footer>
        </Modal>
        </div>
    )
}