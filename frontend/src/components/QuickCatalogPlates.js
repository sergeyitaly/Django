import React from "react";

import { Button, Card, CardImg, Col, Container, Form, FormControl, Row, Stack } from "react-bootstrap";

import LeatherBags from "../Img/QuickCatalogImages/QuickLeatherBags.png";
import LeatherBelts from "../Img/QuickCatalogImages/QuickLeatherBelts.png"
import LeatherWallets from "../Img/QuickCatalogImages/QuickLeatherWallets.png"
import LeatherAccessories from "../Img/QuickCatalogImages/QuickLeatherAccessories.png"
import BestSellers from "../Img/QuickCatalogImages/BestSellersIMG.png"
import NewProducts from "../Img/QuickCatalogImages/NewProductsImg.png"
import { Link } from "react-router-dom";

function QuickPlates () {

    return (

        <Container fluid style={{backgroundColor: "#110B09"}} className="">
            <Container className="py-5">
            <Row xs={1} md={3} className="g-5">
              <Col>
                <Link to={`/shop/bags`}>
                    <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                        <CardImg className="d-block w-100" variant="center" src={LeatherBags}/>
                        <Card.ImgOverlay>
                            <Card.Title>Bags</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Link>
              </Col>
              <Col>
                <Link to={`/shop/belts`}>
                    <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                        <CardImg className="d-block w-100" variant="center" src={LeatherBelts}/>
                        <Card.ImgOverlay>
                            <Card.Title>Belts</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Link>
              </Col>
              <Col>
                <Link to={`/shop/wallets`}>
                    <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                        <CardImg className="d-block w-100" variant="center" src={LeatherWallets}/>
                        <Card.ImgOverlay>
                            <Card.Title>Wallets</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Link>
              </Col>
              <Col>
                <Link to={`/shop/accessories`}>
                    <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                        <CardImg className="d-block w-100" variant="center" src={LeatherAccessories}/>
                        <Card.ImgOverlay>
                            <Card.Title>Accessories</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Link>
              </Col>
              <Col>
                <Link to={`/shop/bestSellers`}>
                    <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                        <CardImg className="d-block w-100" variant="center" src={BestSellers}/>
                        <Card.ImgOverlay>
                            <Card.Title>Best Sellers</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Link>
              </Col>
              <Col>
                <Link to={`/shop/newProducts`}>
                    <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                        <CardImg className="d-block w-100" variant="center" src={NewProducts}/>
                        <Card.ImgOverlay>
                            <Card.Title>New Products</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Link>
              </Col>
            </Row>
            </Container>
            <Container className="pb-4">
                <Stack className="flex-row justify-content-between">
                    <div className="coupon-text-container">
                        <h1>Save 10%</h1>
                        <p>
                            On your first order when you subscribe to our newsletter. 
                            We send occasional emails with new product alerts and always include a coupon.
                        </p>
                    </div>
                    <Form className="d-flex input-block">
                        <FormControl
                        className="email-input"
                        type="email"
                        placeholder="YOUR@EMAIL.COM"
                        />
                        <Button className="subscribe-btn"><span>Subscribe</span></Button>
                    </Form>
                </Stack>
            </Container>
        </Container>

    )
}

export default QuickPlates;
