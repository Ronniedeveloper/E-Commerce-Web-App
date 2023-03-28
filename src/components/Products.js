import React from "react";
import data from "./data";
import Card from "./Card";
import { useCart } from 'react-use-cart';

const Products = (props) => {
    const { addItem } = useCart();
    return (
        <div className="ms-5 products-container">
            <div className="ms-5 row justify-content-space-evenly pt-4 px-2 col-9 col-sm-12 col-md-1 col-lg-9">
                <h1 className="">Category __ Snacks</h1>
                { data.productData.map((item) => {
                    return(
                        <Card 
                            img={item.img} 
                            title={item.title} 
                            price={item.price}
                            item={item} 
                            quantity={item.quantity} 
                            unit={item.unit} 
                            key={item.id} 
                            onClick = {(() => addItem(props.id))}
                        />
                    )
                })}
            </div>
        </div>
    );
}
 
export default Products;