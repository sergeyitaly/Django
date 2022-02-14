import React from "react";
import { Container } from "react-bootstrap";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallax from "../components/Parallax/Parallax"
import "../scss/main.scss"

import ShopBanner from "../Img/Banners/ShopBanner.png"

import CatalogProductPlates from "../components/CatalogProductPlates";

const Shop = () => {

    return(

        <ParallaxProvider>
            <Parallax imgsrc={ShopBanner} height="500px">
            <div style={{position: "absolute"}} className="content-style">
                <h1 style={{width: "30%"}} className="text-center mb-5">Catalog Products</h1>
            </div>
            </Parallax>
            <Container fluid style={{backgroundColor: "#110B09"}} className="py-3 mb-4">
                <CatalogProductPlates />
            </Container>
        </ParallaxProvider>

    )

}

export default Shop