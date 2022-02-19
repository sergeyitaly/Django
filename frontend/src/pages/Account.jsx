import React, {useState, useEffect} from "react";
import Axios from "axios";
import "../scss/main.scss"
import { Button, Container, Form } from "react-bootstrap";

const Account = () => {
    const [username, setFormUsername] = useState(localStorage.getItem('username'))
    const [loading, setLoading] = useState()

    const Logout = async (e) => {
            localStorage.clear();  
            window.location.replace('http://localhost:3000/shop');
        };
    
    return (
        <Container fluid style={{backgroundColor: "#110B09"}} className="py-5 my-5">
            <Form className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center">
                <h2 style={{fontWeight: "bold"}}>Your account</h2>
                <p style={{textTransform: "none"}}>{username}</p>
            </div>
            <Button className="common-btn" style={{width: "350px", height: "50px", borderRadius: "30px", fontSize: "22px"}}onClick={Logout}>
                    Logout
                </Button>   
            </Form>
        </Container>
            )
    }
    
    export default Account;