import React from "react";
import { Card, Col } from "react-bootstrap";

function Recomended (props) {

    return (

        <Col>
            <a style={{textDecoration: "none"}} href={props.link}>
                <Card style={{backgroundColor: "#110B09", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)"}}>
                    <Card.Img style={{borderRadius: "10px"}} src={props.img}/>
                    <Card.Body className="d-flex flex-column align-items-center">
                        <Card.Title className="text-center" style={{fontSize: "15px"}}>{props.title}</Card.Title>
                        <Card.Text style={{color: "#828C76"}}>{props.cost}</Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </Col>

    )

}

export default Recomended