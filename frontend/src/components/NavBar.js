import React, { useState } from "react";
import {Navbar, Nav, Container, Offcanvas, Form, Button} from "react-bootstrap";
import Logo from "../Img/NavbarImages/Logo.svg";
import {MdOutlineArrowBackIos, MdOutlineClose} from "react-icons/md"

import {HiOutlinePlus, HiOutlineMinus} from "react-icons/hi"

 function Navibar(onClose, items = []) {

    const [cartItems, setCartItems] = React.useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar expand="xl" variant="dark">
            <Container className="">
                <Nav>
                    <Navbar.Brand>
                        <Nav.Link href="/"><img className="" src={Logo} alt="Logo"/></Nav.Link>
                    </Navbar.Brand>
                </Nav>
                <Navbar.Toggle style={{background: "none", width: "100px", boxShadow: "none"}} aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/" className="hover-txt ps-xl-4">Home</Nav.Link>
                        <Nav.Link href="/shop" className="hover-txt ps-xl-4">Shop</Nav.Link>
                        <Nav.Link href="/about" className="hover-txt ps-xl-4">About</Nav.Link>
                        <Nav.Link href="/lookbook" className="hover-txt ps-xl-4">LookBook</Nav.Link>
                        <Nav.Link href="/contact-us" className="hover-txt ps-xl-4">Contact Us</Nav.Link>
                    </Nav>
                    <Nav className="mr-2 ps-xl-2 flex-row align-items-center">
                        <Form className="d-flex search-block"> 
                        <input className="input-txt" placeholder="Search..."/>
                        <Nav.Link style={{position: "absolute", padding: "10px"}} className="search-btn">
                            <svg width="27" height="20" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7915 6.92211C16.7915 9.97385 13.5044 12.8442 8.89575 12.8442C4.28708 12.8442 1 9.97385 1 6.92211C1 3.87037 4.28708 1 8.89575 1C13.5044 1 16.7915 3.87037 16.7915 6.92211Z" stroke="#828C76" strokeWidth="2"/>
                                <rect width="8.02152" height="2.44181" transform="matrix(0.799482 0.600691 -0.778631 0.627482 15.587 10.6493)" fill="#828C76"/>
                            </svg>
                        </Nav.Link>
                        </Form>
                        <Nav.Link className="ps-3" href="/login">
                            <svg width="27" height="20" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.58032 16.9999C0.821129 16.9999 0.278098 16.2659 0.500165 15.54L1.66922 11.718C2.19471 10.0001 3.78052 8.82684 5.57703 8.82684H10.0536H14.0774C15.7622 8.82684 17.2743 9.86083 17.8855 11.4309L19.4761 15.5166C19.7539 16.2302 19.2276 16.9999 18.4618 16.9999C17.9358 16.9999 17.4851 16.6239 17.3909 16.1064L16.9286 13.5672L16.7881 13.0162C16.4839 11.8228 15.6239 10.8487 14.4774 10.3989C14.0321 10.2242 13.5581 10.1345 13.0798 10.1345H10.0536H6.95419C6.52341 10.1345 6.09558 10.2056 5.68794 10.3449C4.30287 10.8182 3.2973 12.0243 3.08093 13.4719L2.69747 16.0373C2.61478 16.5905 2.13967 16.9999 1.58032 16.9999Z" fill="#828C76"/>
                                <path d="M14.554 3.92307C14.554 5.70741 12.659 7.34615 10.054 7.34615C7.44891 7.34615 5.55396 5.70741 5.55396 3.92307C5.55396 2.13874 7.44891 0.5 10.054 0.5C12.659 0.5 14.554 2.13874 14.554 3.92307Z" stroke="#828C76"/>
                            </svg>
                        </Nav.Link>
                        <Nav.Link className="ps-3" onClick={handleShow}>
                            <svg width="40" height="20" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.5757 14.168C27.7637 14.168 27.0404 13.9673 26.4057 13.566C25.771 13.1647 25.2717 12.586 24.9077 11.83C24.553 11.0647 24.3757 10.1547 24.3757 9.1C24.3757 8.04533 24.553 7.14 24.9077 6.384C25.2717 5.61867 25.771 5.03533 26.4057 4.634C27.0404 4.23267 27.7637 4.032 28.5757 4.032C29.3877 4.032 30.111 4.23267 30.7457 4.634C31.3804 5.03533 31.875 5.61867 32.2297 6.384C32.5937 7.14 32.7757 8.04533 32.7757 9.1C32.7757 10.1547 32.5937 11.0647 32.2297 11.83C31.875 12.586 31.3804 13.1647 30.7457 13.566C30.111 13.9673 29.3877 14.168 28.5757 14.168ZM28.5757 12.25C29.173 12.25 29.6397 11.9933 29.9757 11.48C30.321 10.9667 30.4937 10.1733 30.4937 9.1C30.4937 8.02667 30.321 7.23333 29.9757 6.72C29.6397 6.20667 29.173 5.95 28.5757 5.95C27.9877 5.95 27.521 6.20667 27.1757 6.72C26.8397 7.23333 26.6717 8.02667 26.6717 9.1C26.6717 10.1733 26.8397 10.9667 27.1757 11.48C27.521 11.9933 27.9877 12.25 28.5757 12.25Z" fill="#828C76"/>
                                <path d="M18.7841 15.5862C18.7841 16.3298 18.0915 16.9327 17.2372 16.9327C16.3829 16.9327 15.6903 16.3298 15.6903 15.5862C15.6903 14.8425 16.3829 14.2396 17.2372 14.2396C18.0915 14.2396 18.7841 14.8425 18.7841 15.5862Z" fill="#828C76"/>
                                <path d="M0.63822 2.50551C0.408036 2.50551 0.221436 2.3189 0.221436 2.08872C0.221436 1.85854 0.408036 1.67194 0.63822 1.67194H1.82162C2.53857 1.67194 3.16802 2.14881 3.36208 2.83899L5.67068 11.0497C5.91323 11.9123 6.69994 12.5083 7.59602 12.5083H16.3719C17.2819 12.5083 18.0771 11.894 18.307 11.0136L19.0849 8.03399C19.2646 7.34572 18.7453 6.67335 18.0339 6.67335H4.07439C3.89333 6.67335 3.73298 6.55645 3.67759 6.38407C3.59114 6.11504 3.79181 5.83978 4.07439 5.83978H18.2851C19.5861 5.83978 20.5409 7.06246 20.2254 8.32472L19.3501 11.8268C19.1276 12.7172 18.3276 13.3419 17.4098 13.3419H6.92487C6.01381 13.3419 5.21788 12.7262 4.98901 11.8443L2.822 3.495C2.67077 2.91233 2.14488 2.50551 1.54291 2.50551H0.63822Z" fill="#828C76"/>
                                <ellipse cx="7.95581" cy="15.5862" rx="1.54688" ry="1.34653" fill="#828C76"/>
                            </svg>
                        </Nav.Link>
                            <Offcanvas show={show} items  placement="end" onHide={handleClose} style={{backgroundColor: "#2A1D18"}}>
                                <Offcanvas.Header className="flex-column mt-3 p-0">
                                    <div className="d-flex justify-content-start align-items-center mt-3">
                                        <Button style={{background: "none", width: "40px", height: "40px", padding: "0", marginRight: "10px"}} className="d-flex justify-content-center align-items-center" onClick={handleClose}>
                                            <MdOutlineArrowBackIos style={{width: "30px", height: "30px"}}/>
                                        </Button>
                                        <Offcanvas.Title style={{color: "white", fontSize: "25px"}}>Continue Shopping</Offcanvas.Title>
                                    </div>
                                    <hr className="px-5" style={{height: "2px", width: "100%", color: "#828C76", opacity: "initial"}} />
                                    <h2 style={{color: "white"}} className="text-center my-4">MY PURCHASES</h2>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="p-0">

                                        <Container style={{backgroundColor: ""}} className="d-flex justify-content-center py-3 my-4">
                                            <div style={{width: "50%", height: "100%"}} className="px-3">
                                                <img className="w-100 rounded" src="https://cdn.shopify.com/s/files/1/0003/2725/4068/products/ryder-reserve-bison-leather-trifold-wallet_367d2524-7739-46f6-b4db-773e17a148dc_2000x.jpg?v=1602077869"/>
                                            </div>
                                            <div style={{width: "50%"}} >
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <p style={{fontSize: "12px"}} className="mb-1">Saddle Tan</p>
                                                        <p style={{fontSize: "15px", color: "white"}} className="mb-1">Dakota Leather Wallet</p>
                                                    </div>
                                                    <Button style={{background: "none", width: "30px", height: "30px", padding: "0"}}>
                                                        <MdOutlineClose style={{width: "30px", height: "30px"}} className="mb-3"/>
                                                    </Button>
                                                </div>
                                                <p style={{fontSize: "15px"}} className="mb-1">Quantity:</p>
                                                <div className="d-flex justify-content-center align-items-center my-2" style={{width: "70px", height: "25px", border: "1px solid white", borderRadius: "30px"}}>
                                                    <Button style={{background: "none", width: "30px", height: "20px", padding: "0"}} className="d-flex justify-content-center align-items-center">
                                                        <HiOutlineMinus style={{width: "15px"}}/>
                                                    </Button>
                                                    <span style={{fontSize: "15px", color: "white"}}>1</span>
                                                    <Button style={{background: "none", width: "30px", height: "20px", padding: "0"}} className="d-flex justify-content-center align-items-center">
                                                        <HiOutlinePlus style={{width: "15px"}}/>
                                                    </Button>
                                                </div>
                                                <p style={{color: "white", fontSize: "15px"}} className="mb-0">$84.15</p>
                                            </div>
                                        </Container>

                                </Offcanvas.Body>
                                <Container fluid className="mb-4">
                                    <hr className="px-5" style={{height: "2px", width: "100%", color: "#828C76", opacity: "initial"}} />
                                    <Container className="d-flex flex-column">
                                        <div className="d-flex justify-content-between py-3">
                                            <p style={{fontWeight: "bold"}}>Subtotal:</p>
                                            <p style={{color: "white"}}>$84.15</p>
                                        </div>
                                        <Button className="common-btn" style={{width: "100%", height: "50px", borderRadius: "30px", fontSize: "22px"}}>
                                            Checkout
                                        </Button>
                                    </Container>
                                </Container>
                            </Offcanvas>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navibar;