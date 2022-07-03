import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../component/NavBar.js';
import { Carousel, img, Button, Container, Row, Col, Card } from 'react-bootstrap';

export default function Tinhnang() {
    return (
        <div>
            <NavBar />
            <div style={{backgroundColor: "#f2f2fe", paddingTop: "6rem"}}>
	            <h2 style={{paddingTop: "4rem", paddingBottom: "2rem"}}>Omnichannel mang đến mọi thứ bạn cần <br />
				để quản lý & bán hàng đa kênh ngay hôm nay</h2>
				<h4 style={{paddingBottom: "2rem"}}>Khám phá những tính năng vượt trội của Sapo</h4>
				<Button variant="info" size="lg" href="/dang-ky-dich-vu">Đăng ký ngay</Button>
				<Container>
					<Row style={{paddingTop: "4rem", paddingBottom: "3rem"}}>
						<Col sx={2}>
							<img src="tn1.PNG" />
							<h6>Bán tại cửa hàng & chuỗi</h6>
						</Col>
						<Col sx={2}>
							<img src="tn2.PNG" />
							<h6>Bán trên website</h6>
						</Col>
						<Col sx={2}>
							<img src="tn3.PNG" />
							<h6>Bán trên facebook</h6>
						</Col>
						<Col sx={2}>
							<img src="tn4.PNG" />
							<h6>Bán trên sàn TMDT</h6>
						</Col>
						<Col sx={2}>
							<img src="tn5.PNG" />
							<h6>Đồng bộ nhanh chóng</h6>
						</Col>
						<Col sx={2}>
							<img src="tn6.PNG" />
							<h6>Quản lý tập trung</h6>
						</Col>
					</Row>
				</Container>
			</div>
			<div>
				<Container>
					<Row style={{marginTop: "2rem"}}>
						<Col xs={5}>
							<h1 style={{textAlign: "left"}}>01</h1>
							<h4 style={{textAlign: "left"}}>Bán hàng tại cửa hàng và chuỗi</h4><br />
							<p style={{textAlign: "left"}}>Giải pháp bán hàng chuyên nghiệp, quản lý hiệu quả và kết nối
							mọi thiết bị phần cứng giúp tăng doanh số cửa hàng của bạn</p>
							<p style={{textAlign: "left"}}>Bán hàng và thanh toán cho khách hàng nhanh chóng
							ngay trên 1 màn hình</p>
							<p style={{textAlign: "left"}}>Bán hàng linh hoạt trên mọi thiết bị như điện thoại,
							máy tính bảng, laptop...</p>
							<p style={{textAlign: "left"}}><a href="#">Xem thêm</a></p>
						</Col>
						<Col xs={7}>
							<img src="tinhnang1.png" />
						</Col>
					</Row>
					<Row style={{marginTop: "2rem"}}>
						<Col xs={7}>
							<img src="tinhnang2.png"  style={{width: "80%"}}/>
						</Col>
						<Col xs={5}>
							<h1 style={{textAlign: "left"}}>02</h1>
							<h4 style={{textAlign: "left"}}>Bán trên Facebook</h4><br />
							<p style={{textAlign: "left"}}>Giải pháp bán hàng trên Facebook hiệu quả giúp bạn không sót
							đơn hàng, tránh đối thủ cướp khách hàng</p>
							<p style={{textAlign: "left"}}>Quản lý comment/inbox và đơn hàng tập trung</p>
							<p style={{textAlign: "left"}}>Tự động trả lời comment, inbox ngay lập tức
							khi bạn không online.</p>
							<p style={{textAlign: "left"}}><a href="#">Xem thêm</a></p>
						</Col>
					</Row>
					<Row style={{marginTop: "2rem"}}>
						<Col xs={5}>
							<h1 style={{textAlign: "left"}}>03</h1>
							<h4 style={{textAlign: "left"}}>Bán trên sàn TMĐT</h4><br />
							<p style={{textAlign: "left"}}>Tiếp cận hơn 65 triệu khách hàng thường xuyên mua sắm trên các sàn
							TMĐT được yêu thích nhất Việt Nam như Sendo Shopee, Lazada.</p>
							<p style={{textAlign: "left"}}>Kết nối sản phẩm giữa Sapo Omnichannel với sàn TMĐT, mọi thay đổi về giá sản phẩm... trên phần mềm sẽ được tự động cập nhật lên các sàn.</p>
							<p style={{textAlign: "left"}}>Quản lý hàng hóa, tồn kho, đơn hàng...của các sàn TMĐT
							tập trung trên Sapo</p>
							<p style={{textAlign: "left"}}>Báo cáo chi tiết và so sánh hiệu quả kinh doanh
							giữa các sàn.</p>
							<p style={{textAlign: "left"}}><a href="#">Xem thêm</a></p>
						</Col>
						<Col xs={7}>
							<img src="tinhnang3.png" />
						</Col>
					</Row>
				</Container>
			</div>
			<div style={{backgroundImage: "url('backgroundtinhnang.jpg')"}}>
			<Container>
				<Row>
				<Card style={{ width: '18rem', marginLeft: "2rem", marginRight: "5rem", marginTop: "3rem", marginBottom: "4rem" }}>
				  <Card.Body>
				    <Card.Title> Đồng bộ giá sản phẩm</Card.Title><br />
				    <Card.Text>
				    	Mọi thay đổi về giá sản phẩm và số lượng sản phẩm sẽ được cập nhật đầy đủ trên kênh bán hàng.
				    </Card.Text>
				  </Card.Body>
				</Card>

				<Card style={{ width: '18rem', marginRight: "5rem", marginTop: "3rem", marginBottom: "4rem"  }}>
				  <Card.Body>
				    <Card.Title>Đồng bộ đơn hàng</Card.Title><br />
				    <Card.Text>
				    	Đơn hàng tất cả các kênh sẽ được đồng bộ về Omnichannel. Bạn có thể xem chi tiết đơn hàng tại Omnichannel
				    </Card.Text>
				  </Card.Body>
				</Card>

				<Card style={{ width: '18rem', marginTop: "3rem", marginBottom: "4rem"  }}>
				  <Card.Body>
				    <Card.Title>Đồng bộ kho hàng</Card.Title><br />
				    <Card.Text>
				    	Omnichannel sẽ giúp bạn trừ tồn kho khi có bất cứ đơn hàng phát sinh trên bất kỳ kênh nào. Giúp bạn kiểm soát chính xác tồn kho hàng hóa của từng kênh.
				    </Card.Text>
				  </Card.Body>
				</Card>
				</Row>
			</Container>
			</div>
        </div>
    )
}