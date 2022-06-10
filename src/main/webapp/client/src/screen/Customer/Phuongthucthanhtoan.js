import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import { Carousel, img, Button, Container, Row, Col, Card, Accordion } from 'react-bootstrap';

export default function Phuongthucthanhtoan() {
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
                      <p>Nội dung: abc nạp tiền</p>
                      <Button variant="info" href="/dang-ky-dich-vu">Đăng ký</Button>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Momo</Accordion.Header>
                    <Accordion.Body>
                     <p> Số điện thoại: 0929219222</p>
                      <p>Người nhận: Tổm Thị Tỉm</p>
                      <p>Số tiền: 120.000đ</p>
                      <p>Nội dung: abc nạp tiền</p>
                      <Button variant="info" href="/dang-ky-dich-vu">Đăng ký</Button>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
        </div>
    )
}