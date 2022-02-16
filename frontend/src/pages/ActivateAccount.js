import React, {useState, useEffect} from "react";
import axios from "axios";
import "../scss/main.scss"
import { Button, Container, Form } from "react-bootstrap";
import { Link, useParams, useNavigate  } from "react-router-dom";

const ActivateAccount = () => {

    const { uid, token } = useParams();
    
    const history = useNavigate ();
    
    const activeClick = (e) => {
       
        axios.post('http://localhost:8000/register/', { uid: uid, token: token })
            .then(() => {
                history.push('/login')
            })
            .catch(err => {
                alert(err.response.data);
            })
    };
    
    return (
        <React.Fragment>
            <Button onClick={activeClick} color="primary">Activate Now</Button>
        </React.Fragment>
    )
    }
    
    export default ActivateAccount;