import React, {useState, useEffect} from "react";
import axios from "axios";
import "../scss/main.scss"
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function CreateAccount () {

    const [formValues, setFormValues] = useState([]);
    function createPost() {axios.post('http://127.0.0.1:8000/accounts/', formValues)
                                 .then(response => this.setState({ articleId: response.data.id }))}

      return (
    
    <Container fluid style={{backgroundColor: "#110B09"}} className="py-5 my-5">
        <Container className="d-flex justify-content-center py-5 flex-column">
            <div className="d-flex flex-column align-items-center">
                <h2 style={{fontWeight: "bold"}}>Create Account</h2>
            </div>
            <Form onSubmit={createPost} className="d-flex flex-column align-items-center">
                <Form.Group className="mb-3 form-style" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Name"  value={formValues.name} />
                </Form.Group>
                <Form.Group className="mb-3 form-style" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Last name" value={formValues.lastname}  />
                </Form.Group>
                <Form.Group className="mb-3 form-style" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email"  value={formValues.email} />
                </Form.Group>
                <Form.Group className="mb-3 form-style" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" value={formValues.password} />
                </Form.Group>
                <Button className="common-btn" style={{width: "350px", height: "50px", borderRadius: "30px", fontSize: "22px"}} type="submit">
                    Create Account
                </Button>
            </Form>
        </Container>
    </Container>
  );
}
  
export default CreateAccount;