import React from "react";
import { useCart } from "react-use-cart";

const Card = (props) => {
    const { addItem } = useCart();

    return (
        <div className="card-container col-11 col-sm-12 col-md-11 col-lg-3 mb-4 mt-4">
            <div className="card card-4 p-0 overflow-hidden h-100 shadow round">
                <img className='card-img-top img-fluid image-responsive' src={props.img} alt=""/>
                <div className="card-body text-center">
                    <h4 className="card-title">{props.title}</h4>
                    <h4 className="card-text">{props.price} Shs</h4>
                    <h5>{props.quantity} {props.unit}</h5>
                    <button className="btn btn-lg btn-warning rounded-pill mt-2" 
                    onClick={()=>addItem(props.item)}
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card;