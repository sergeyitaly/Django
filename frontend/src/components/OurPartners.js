import React from "react";
import { Row, Col, Container } from"react-bootstrap";

import CraftLore from "../Img/PartnersImages/Craft&Lore.svg";
import GoForthGoods from "../Img/PartnersImages/GoForthGoods.svg";
import BuffaloJackson from "../Img/PartnersImages/BuffaloJackson.svg";
import Orox from "../Img/PartnersImages/Orox.svg"
import OdinLeatherGoods from "../Img/PartnersImages/OdinLeatherGoods.svg"


function OurPartners () {

    return (
        <Container style={{padding: "40px"}} className="">
            <h2>Our Partners</h2>
            <Row style={{alignItems: "center"}} mg={5}>
                <Col>
                    <a href="https://craftandlore.com">
                        <img src={CraftLore}/>
                    </a> 
                </Col>
                <Col>
                    <a href="https://www.goforthgoods.com">
                        <img src={GoForthGoods}/>
                    </a>
                </Col>
                <Col>
                    <a href="https://buffalojackson.com">
                        <img src={BuffaloJackson}/>
                    </a>
                </Col>
                <Col>
                    <a href="https://www.oroxleather.com">
                        <img src={Orox}/>
                    </a>
                </Col>
                <Col>
                    <a href="https://odinleathergoods.com">
                        <img src={OdinLeatherGoods}/>
                    </a>
                </Col>
            </Row>
        </Container>
    )

}

export default OurPartners;