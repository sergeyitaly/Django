import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallax from "../components/Parallax/Parallax"

import { Button, Container } from "react-bootstrap";

import LeatherWallet from "../Img/ParallaxImages/LeatherWallet.svg";
import MenLeatherBag from "../Img/ParallaxImages/banner_man_leather_bag.svg"

import QuickCatalogPlates from "../components/QuickCatalogPlates"
import Slider from "../components/Slider";
import CatalogProductPlates from "../components/CatalogProductPlates";
import Partners from "../components/OurPartners"

const Home = () => {
  return (
    <ParallaxProvider>
      <Parallax imgsrc={LeatherWallet} height="500px">
          <div style={{position: "absolute"}} className="content-style">
              <h1 style={{width: "30%"}} className="text-center mb-5">BEST LEATHER GOODS FOR YOU</h1>
              <a href="shop"><Button className="btn btn-default common-btn"><span style={{fontSize: "24px"}}>Shop Now</span></Button></a>
          </div>
      </Parallax>
      <QuickCatalogPlates/>
      <Slider/>
      <Container fluid style={{backgroundColor: "#110B09"}} className="py-5">
        <h1 className="d-flex justify-content-center">Catalog Products</h1>
        <CatalogProductPlates/>
      </Container>
      <Parallax imgsrc={MenLeatherBag} height="600px">
          <div style={{position: "absolute", background: "none"}} className="content-style">
            <div className="background-shadow">
              <h1 className="text-center mb-5 px-1" >FOR THE LOVE OF SIMPLE UNASSUMING THINGS</h1>
              <a href="shop"><Button className="common-btn">Shop Now</Button></a>
            </div>
          </div>
      </Parallax>
      <Partners/>
    </ParallaxProvider>
  );
}
  
export default Home;