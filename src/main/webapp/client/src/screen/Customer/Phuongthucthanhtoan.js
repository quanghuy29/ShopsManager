import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import { Carousel, img, Button, Container, Row, Col, Card, Accordion, Navbar } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function Phuongthucthanhtoan() {
    const data = localStorage.getItem('shopRegister');
    const shopRegisterLocal  = JSON.parse(data);

    const data1 = localStorage.getItem('user');
    const userLocal  = JSON.parse(data1);

    const navigate = useNavigate();

    const [response, setResponse] = useState("");

    var resp = [];
    const registerOrder = () => {
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


        
        const postIt = {
                shopId: "shopRegisterLocal.data.shopId",
                pay_money: "120000",
                pay_date: today,
                state: "0"
            }
        if ( !shopRegisterLocal || userLocal) {postIt.shopId = userLocal.shopId[0]}
        if ( shopRegisterLocal || !userLocal) {postIt.shopId = shopRegisterLocal.data.shopId}
        axios.post('http://localhost:8080/ShopsManager_war_exploded/register-order', postIt)
            .then(res => resp.push(res.data))
            .then(Res => console.log(Res))
        console.log(postIt);
        
            setTimeout(direct, 1000);

          //   {
          //     "shopId": "1",
          //     "pay_money": "1",
          //     "pay_date": "2022-10-10",
          //     "state": "2"
          // }
    }
    const direct = () => {
      const setJsonData=JSON.stringify(resp[0]);
      localStorage.setItem('orderState', setJsonData);

      const getData = localStorage.getItem("orderState");
      const orderStateLocal  = JSON.parse(getData);

     if(orderStateLocal) navigate("/trang-thai-don-hang", { replace: true }); 
    }
    return (
        <div>
        <div>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="/dashboard" style = {{marginLeft: "40px", fontSize: '2.3rem', fontWeight: 700}}>OmniChannel</Navbar.Brand>
                <Navbar.Collapse id="navbarScroll" style={{marginLeft: '34rem'}} >
                </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
        <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
            <Row>
                <h2>Chọn hình thức thanh toán</h2>
            </Row>
            <Row>
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Thanh toán qua viettinbank</Accordion.Header>
                    <Accordion.Body>
                      <p>Số tài khoản: 109393230232332</p>
                      <p>Người nhận: Tổm Thị Tỉm</p>
                      <p>Số tiền: 120.000đ</p>
                      <p>Nội dung: {shopRegisterLocal? shopRegisterLocal.shopId : userLocal.shopId[0]} nạp tiền</p>
                      <Button variant="info" onClick={registerOrder}>Đăng ký</Button>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Momo</Accordion.Header>
                    <Accordion.Body>
                     <p> Số điện thoại: 0929219222</p>
                      <p>Người nhận: Tổm Thị Tỉm</p>
                      <p>Số tiền: 120.000đ</p>
                      <p>Nội dung: {shopRegisterLocal? shopRegisterLocal.shopId : userLocal.shopId[0]} nạp tiền</p>
                      <Button variant="info" onClick={registerOrder}>Đăng ký</Button>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
        </div>
    )
}