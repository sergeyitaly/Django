import React from "react";
import { Card, Col, CardImg} from "react-bootstrap";

function ConstructCards (props) {

    return (

        <Col>
            <a href={props.id}>
                <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                    <CardImg className="d-block w-100" variant="center" src={props.image}/>
                    <Card.ImgOverlay style={{textAlign: "center"}}>
                        <div className="d-flex flex-column justify-content-between align-items-center" style={{height: "95%"}}>
                            <img style={{width: "40%"}} src={props.brandImage}/>
                            <div>
                                <Card.Subtitle style={{color: "#828C76", fontSize: "20px"}}>{props.colorProduct}</Card.Subtitle>
                                <Card.Title className="m-0" style={{fontSize: "22px", height: "55%"}}>{props.nameProduct}</Card.Title>
                                <Card.Text style={{fontStyle: "italic", color: "white", fontSize: "25px"}}>{props.costProduct}</Card.Text> 
                            </div>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </a>
        </Col>
        
    )

}

export default ConstructCards;