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
                        <a href="#" className="navigation-txt">CUSTOMER SERVICE</a>
                        <a href="#" className="navigation-txt">SHIPPING</a>
                        <a href="#" className="navigation-txt">RETURN, ECHANGE, ISSUES</a>
                        <a href="#" className="navigation-txt">WHOLESALE &amp; BULK ORDERS</a>
                        <a href="#" className="navigation-txt">CONTACT</a>
                        <a href="#" className="navigation-txt">JOURNAL</a>
                        <a href="/" className="navigation-txt">Home</a>
                        <a href="shop" className="navigation-txt">SHOP</a>
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
                            <Button style={{width: "12rem", height: "3rem", borderRadius: "5px"}}><span>Subscribe</span></Button>
                        </Form>
                    </div>
                </Row>
            </Container>
        </Container>
        
    )
}

export default Footer;