import React from "react";

function BannerConstruct (props) {

    return (

        <div className="banner-style">
            <div className="img-container">
                <img className="img-banner" src={props.banner}/> 
            </div>
            <div className="overlay-container">
                <div className="txt-container">
                    <h1 className="txt-overlay">{props.titleBanner}</h1>
                </div>
            </div>
        </div> 

    )

}

export default BannerConstruct