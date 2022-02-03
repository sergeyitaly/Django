import React from "react";

import "../scss/main.scss"

import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container fluid style={{backgroundColor: "#110B09"}} className="py-5 my-5">
        <Container className="d-flex justify-content-center py-5 flex-column">
            <div className="d-flex flex-column align-items-center">
                <h2 style={{fontWeight: "bold"}}>Login</h2>
                <p style={{textTransform: "none"}}>Please enter your email and password:</p>
            </div>
            <Form className="d-flex flex-column align-items-center">
                <Form.Group className="mb-3 form-style" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 form-style" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="common-btn mb-3" style={{width: "350px", height: "50px", borderRadius: "30px", fontSize: "22px"}} type="submit">
                    Login
                </Button>
                <Link to="/login/create-account">
                    <Button className="common-btn" style={{width: "350px", height: "50px", borderRadius: "30px", fontSize: "22px"}}>
                        Create Account
                    </Button>
                </Link>
            </Form>
        </Container>
    </Container>
  );
}
  
export default Login;