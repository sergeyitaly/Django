import React from "react";
import "../scss/footer.scss"
import { Container, Row, Form, FormControl, Button} from "react-bootstrap";

import FooterLogo from "../Img/NavbarImages/Logo.svg"

import {FaInstagram, FaTwitter, FaFacebookSquare, FaPinterest, FaYoutube} from "react-icons/fa"

function Footer () {

    return (
        <Container fluid style={{backgroundColor: "#110B09"}}>
            <Container className="">
                <Row md={1} lg={3} className="justify-content-between pt-5 pb-3">
                    <div className="footer-logo">
                        <img src={FooterLogo}/>
                        <div className="contact-container">
                            <h4>Follow us:</h4>
                            <div className="pt-3">
                                <ul className="d-flex list-unstyled p-2">
                                    <li className="px-2">
                                        <a href="https://www.instagram.com"><FaInstagram style={{width: "45px", height:"45px", color: "#828C76"}}/></a>
                                    </li>
                                    <li className="px-2">
                                        <a href="https://twitter.com"><FaTwitter style={{width: "45px", height:"45px", color: "#828C76"}}/></a>
                                    </li>
                                    <li className="px-2">
                                        <a href="https://www.facebook.com"><FaFacebookSquare style={{width: "45px", height:"45px", color: "#828C76"}}/></a>
                                    </li>
                                    <li className="px-2">
                                        <a href="https://www.pinterest.com"><FaPinterest style={{width: "45px", height:"45px", color: "#828C76"}}/></a>
                                    </li>
                                    <li className="px-2">
                                        <a href="https://www.youtube.com"><FaYoutube style={{width: "45px", height:"45px", color: "#828C76"}}/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                        <p style={{fontSize: "14px"}}>Copyright 2021 © Leather Handmade. All rights reserved.</p>
                    </div>
                    <div className="footer-navigation">
                        <ul>
                            <li><a href="#" className="navigation-txt footer-link">CUSTOMER SERVICE</a></li>
                            <li><a href="#" className="navigation-txt footer-link">SHIPPING</a></li>
                            <li><a href="#" className="navigation-txt footer-link">RETURN, ECHANGE, ISSUES</a></li>
                            <li><a href="#" className="navigation-txt footer-link">WHOLESALE &amp; BULK ORDERS</a></li>
                            <li><a href="#" className="navigation-txt footer-link">CONTACT</a></li>
                            <li><a href="#" className="navigation-txt footer-link">JOURNAL</a></li>
                            <li><a href="/" className="navigation-txt footer-link">Home</a></li>
                            <li><a href="shop" className="navigation-txt footer-link">SHOP</a></li>
                        </ul>
                    </div>
                    <div className="footer-coupon">
                        <div className="coupon-container">
                            <h3 style={{justifyContent: "flex-start"}}>JOIN OUR MAILING LIST</h3>
                            <p style={{width: "80%"}} className="text-coupon mt-3">Always contains coupons. Privacy is protected.</p>
                        </div>
                        <Form style={{width: "90%"}} className="d-flex mt-4 input-block">
                            <FormControl
                                className="email-input"
                                type="email"
                                placeholder="YOUR@EMAIL.COM"
                                />
                            <Button className="subscribe-btn"><span>Subscribe</span></Button>
                        </Form>
                    </div>
                </Row>
            </Container>
        </Container>
        
    )
}

export default Footer;