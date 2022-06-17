import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import { Carousel, img, Button, Container, Row, Col, Card, Accordion } from 'react-bootstrap';

export default function Phuongthucthanhtoan() {
    const data = localStorage.getItem('shopRegister');
    const shopRegisterLocal  = JSON.parse(data);

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
                shopId: shopRegisterLocal.shopId,
                pay_money: "120000",
                pay_date: today,
                state: "0"
            }


        axios.post('http://localhost:8080/register-order', postIt)
            .then(res => localStorage.setItem('orderState', res))
        
    }
    return (
        <div>
        <NavBarLogin />
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
                      <p>Nội dung: {shopRegisterLocal.shopId} nạp tiền</p>
                      <Button variant="info" href="/trang-thai-don-hang" onClick={registerOrder}>Đăng ký</Button>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Momo</Accordion.Header>
                    <Accordion.Body>
                     <p> Số điện thoại: 0929219222</p>
                      <p>Người nhận: Tổm Thị Tỉm</p>
                      <p>Số tiền: 120.000đ</p>
                      <p>Nội dung: {shopRegisterLocal.shopId} nạp tiền</p>
                      <Button href="/trang-thai-don-hang" variant="info" onClick={registerOrder}>Đăng ký</Button>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
        </div>
    )
}