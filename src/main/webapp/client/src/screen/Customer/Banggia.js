import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../component/NavBar.js';
import { Carousel, img, Button, Container, Row, Col, Card } from 'react-bootstrap';

export default function Banggia() {
    return (
        <div>
            <NavBar />
            <div style={{backgroundImage: "url('backgroundtinhnang.jpg')", paddingTop: "6rem"}}>
            <h1 style={{paddingTop: "3rem"}}>Bảng báo giá nền tảng quản lý bán hàng đa kênh</h1>
            <p style={{marginTop: "2rem"}}>OmniChannel giúp kết nối thông suốt các kênh bán hàng từ online đến offline và quản lý tập trung</p>
            <Container>
            <Row><h3 style={{marginTop: "2rem", marginBottom: "1rem"}}>Gói dịch vụ bao gồm:</h3></Row>
            <Row>
                <Col xs={4}>
                    <h1 >OmniChannel</h1>
                    <p>Giải pháp quản lý bán hàng đa kênh</p>
                    <img src = "banggia.PNG" />
                    <h2>199.000đ</h2>
                    <Button variant="info" size="sm" href="/dang-ky-dich-vu">Đăng ký ngay</Button>
                </Col>
                <Col xs={4}>
                    <p style={{textAlign: "left", paddingBottom: "0.5rem"}}> CRM và Marketing Automation</p>
                    <p style={{textAlign: "left", paddingBottom: "0.5rem"}}>1 cửa hàng</p>
                    <p style={{textAlign: "left", paddingBottom: "0.5rem"}}>Kết nối 40 gian hàng sàn TMĐT</p>
                    <p style={{textAlign: "left", paddingBottom: "0.5rem"}}>Quản lý bán hàng 10 Fanpage</p>
                    <p style={{textAlign: "left", paddingBottom: "0.5rem"}}>Tích hợp đối tác vận chuyển</p>
                </Col>
                <Col xs={4}>
                    <p style={{textAlign: "left", paddingBottom: "0.5rem"}}>Quản lý đơn hàng đa kênh</p>
                    <p style={{textAlign: "left", paddingBottom: "0.5rem"}}>Quản lý hàng hóa tập trung</p>
                    <p style={{textAlign: "left", paddingBottom: "0.5rem"}}>Quản lý kho nâng cao</p>
                    <p style={{textAlign: "left", paddingBottom: "0.5rem"}}>Báo cáo bán hàng đa kênh</p>
                    <p style={{textAlign: "left", paddingBottom: "0.5rem"}}>Bán hàng trên Instagram</p>
                </Col>
            </Row>
            <p style={{paddingTop: "2.5rem", paddingBottom: "2rem"}}>* Lưu ý: Bảng giá chưa bao gồm phí khởi tạo 2.000.000đ. Quý khách sẽ được miễn phí chi phí khởi tạo khi đăng ký
sử dụng OmniChannel từ 2 năm trở lên</p>
            </Container>
            </div>
            <div>
                <h2 style={{marginTop: "1.5rem"}}>Cảm nhận của khách hàng về Sapo Omnichannel</h2>
                <p style={{marginBottom: "3rem", marginTop: "2rem"}}>Sự hài lòng của khách hàng chính là thành công lớn nhất của chúng tôi</p>
                <Container>
                    <Row>
                        <Col xs={2}></Col>
                        <Col xs={8}>
                        <Carousel>
                          <Carousel.Item interval={3000}>
                          <p>OmniChannel giúp tôi quản lý đầu vào, đầu ra, tồn kho thực tế để điều chỉnh kịp thời. Nhờ vậy mà việc thất thoát hàng cũng hạn chế xảy ra. Vì vậy tôi thấy Sapo thực sự là giải pháp quản lý bán hàng phù hợp mà chủ shop cần sử dụng.</p>
                            <img
                              src="danhgia1.jpg"
                              style = {{maxWidth: "8rem", borderRadius: "6rem"}} />
                              <h6 style={{paddingTop: "1rem"}}>Anh Tuấn Anh - Chủ cửa hàng xe điện Lan Anh</h6>
                          </Carousel.Item>

                          <Carousel.Item interval={3000}>
                          <p>Tôi hài lòng với Sapo. Nhờ Sapo hỗ trợ mà Beemart có được nhiều khách hàng hơn. Tôi đánh giá cao đội ngũ chăm sóc khách hàng luôn tận tình và tự vấn cho tôi những tính năng mới, thuận tiện cho việc quản lý và bán hàng online.</p>
                            <img
                              src="danhgia2.jpg"
                              style = {{maxWidth: "8rem", borderRadius: "6rem"}} />
                              <h6 style={{paddingTop: "1rem"}}>Chị Ánh - Chủ siêu thị làm bánh Beemart</h6>
                          </Carousel.Item>

                          <Carousel.Item interval={3000}>
                          <p>Từ khi sử dụng Sapo, việc quản lý, bán hàng từ online tới offline của tôi trở nên dễ dàng và nhẹ nhàng hơn. Chỉ cần mở điện thoại là tôi đã có thể nắm bắt được mọi thông tin tại cửa hàng, từ doanh thu, lãi lỗ, tình hình đơn hàng,... rất đơn giản.</p>
                            <img
                              src="danhgia3.jpg"
                              style = {{maxWidth: "8rem", borderRadius: "6rem"}} />
                              <h6 style={{paddingTop: "1rem"}}>Chị Lan - Chủ cửa hàng mỹ phẩm Lengrin </h6>
                          </Carousel.Item>
                          
                        </Carousel>
                        </Col>
                        <Col xs={2}></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}