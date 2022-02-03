import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import DakotaBifoldWallet from "../Img/WalletProductsImages/DakotaBifoldWallet.png"
import DenverBillfoldWallet from "../Img/WalletProductsImages/DenverBillfoldWallet.png"
import RyderReserveTrifoldWallet from "../Img/WalletProductsImages/RyderReserveTrifoldWallet.png"

import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"

import "../scss/slider.scss";

import SwiperCore, {
  FreeMode,Navigation,Thumbs,Pagination
} from 'swiper';



SwiperCore.use([FreeMode,Navigation,Thumbs,Pagination]);

export default function App() {
  
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  
  return (
    <>
        <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff', borderRadius: "10px"}} slidesPerView={1} spaceBetween={10} loop={true} pagination={{"clickable":true}} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
            <SwiperSlide>
                <img src={DakotaBifoldWallet} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={DenverBillfoldWallet} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={RyderReserveTrifoldWallet} />
            </SwiperSlide>
        </Swiper>
        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper">
            <SwiperSlide>
                <img src={DakotaBifoldWallet} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={DenverBillfoldWallet} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={RyderReserveTrifoldWallet} />
            </SwiperSlide>
        </Swiper>
    </>
  )
}