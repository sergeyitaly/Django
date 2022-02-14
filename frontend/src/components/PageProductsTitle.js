import React from "react";
import { Button } from "react-bootstrap";
import { Card, Col, CardImg} from "react-bootstrap";

import { Link } from "react-router-dom";

function ConstructCards (props) {

    const [isAdded, setIsAdded] = React.useState(false);

    const onClickAdd = () => {
        setIsAdded(!isAdded);
    }

    return (
               
        <div style={{width: "80%"}} className="px-3">
            <img src={props.imageProduct} style={{width: "40%"}}/>
            <img src={props.imageProduct2} style={{width: "40%"}}/>
            <h5>{props.colorProduct}</h5>
            <h2 style={{color: "white"}} className="py-2">{props.nameProduct}</h2>
            <p style={{color: "white", fontSize: "30px"}}>{props.costProduct}</p>
            <Link to="shop">
                <Button style={{borderRadius: "50px", height: "50px"}} onCart={() => console.log("Added")} className="my-4 common-btn">Add to Cart</Button>
            </Link>
            <p className="py-4">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Minima quae placeat sit
                eveniet nemo harum illo, quasi molestias error 
                tempora doloribus distinctio nam. 
            </p>
        </div>  
    )

}

export default ConstructCards;