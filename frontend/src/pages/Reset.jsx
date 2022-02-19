import React, {useState, useEffect} from "react";
import Axios from "axios";
import "../scss/main.scss"
import { Button, Container, Form } from "react-bootstrap";
import { Link, useParams, useNavigate  } from "react-router-dom";

const Reset= () => {

    const { uid, token, new_password } = useParams();
    const [formNewPassword, setFormNewPassword] = useState()
    const history = useNavigate ();
    
    const Passwordretype = (e) => {  
        Axios.post('http://localhost:8000/auth/users/reset_password_confirm/', { uid: uid, token: token, new_password: formNewPassword})
                .then(() => {history.push('/login')})
                window.location.replace('http://localhost:3000/shop');

            };
    return (
        <Container fluid style={{backgroundColor: "#110B09"}} className="py-5 my-5">
            <div className="d-flex flex-column align-items-center">
                <h2 style={{fontWeight: "bold"}}>Change password</h2>
                <p style={{textTransform: "none"}}>Please enter your Newpassword:</p>
            </div>
            <Form className="d-flex flex-column align-items-center">
            <Form.Group className="mb-3 form-style" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password"  value={formNewPassword} onChange={e => setFormNewPassword(e.target.value)} />
                </Form.Group>
              <Button className="common-btn" style={{width: "350px", height: "50px", borderRadius: "30px", fontSize: "22px"}} onClick={Passwordretype}>
                        Change
                </Button> 
             </Form>
        </Container>
            )
    }
    
    export default Reset;