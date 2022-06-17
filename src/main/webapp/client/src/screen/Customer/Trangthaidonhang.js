import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import { Carousel, img, Button, Container, Row, Col, Card } from 'react-bootstrap';

export default function Trangthaidonhang() {
    const data = localStorage.getItem('orderState');
    const orderState  = JSON.parse(data);

    const cancelOrder = () => {
        const putIt = {
            shopID: orderState.shopId,
            pay_money: orderState.pay_money,
            pay_date: orderState.pay_date,
            state: "2"}


        axios.put('http://localhost:8080/register-shop/' + orderState.id, putIt)
            .then(res => console.log(res))
    }

    return (
        <div>
        <NavBarLogin />
        <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
            <Row>
                <h2>Trạng thái đơn hàng</h2>
            </Row>
            <Row>
                <Col xs={4}>
                </Col>
                <Col xs={4}>
                    <Card>
                      <Card.Header>Đơn hàng</Card.Header>
                      <Card.Body>
                        <Card.Title>Gói 1 tháng</Card.Title>
                        <Card.Text>
                          <Row>
                            <h6>Số tiền: 120.000đ</h6>
                            <p>Nội dung: {orderState.shopId} nạp tiền</p>
                          </Row>
                        </Card.Text>
                        <Button variant="primary" href="/" onClick={cancelOrder}>Hủy</Button>
                      </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                </Col>
            </Row>
        </Container>
        </div>
    )
}