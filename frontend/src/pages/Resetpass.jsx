import React, {useState, useEffect} from "react";
import Axios from "axios";
import "../scss/main.scss"
import { Button, Container, Form } from "react-bootstrap";
import { Link, useParams, useNavigate  } from "react-router-dom";

const Resetpass = () => {

    const [formEmail, setFormEmail] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    
    const Passwordreset = (e) => {  
        e.preventDefault();
        setLoading(true);
        fetch('/auth/users/reset_password/',
            {method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                email: formEmail})})
   .then(response => {
       if (response.ok) {
                window.location.replace('http://localhost:3000/shop')
                return response.json()
            } 
            else {throw Error(`Maybe here: code ${response.status}`)}
        })
    .catch(error => {console.log(error)
                    setError('Ошибка, подробности в консоли')})
    .finally(setLoading(false))}


    return (
        <Container fluid style={{backgroundColor: "#110B09"}} className="py-5 my-5">
            <div className="d-flex flex-column align-items-center">
                <h2 style={{fontWeight: "bold"}}>Reset password</h2>
                <p style={{textTransform: "none"}}>Please enter your email:</p>
            </div>
            <Form className="d-flex flex-column align-items-center">
                <Form.Group className="mb-3 form-style" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Email"  value={formEmail} onChange={e => setFormEmail(e.target.value)} />
                </Form.Group>
                <Button className="common-btn" style={{width: "350px", height: "50px", borderRadius: "30px", fontSize: "22px"}} onClick={Passwordreset}>
                            Reset
                </Button> 
             </Form>
        </Container>
            )
    }
    
    export default Resetpass;