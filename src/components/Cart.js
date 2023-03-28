import React from "react";
import { useCart } from "react-use-cart";
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) {
        return <h1 className="text-center my-3">Shopping is empty</h1>
    }

    return (
        <div className="cart-container mt-6 cart text-center">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h4>Cart: ({totalUniqueItems}) Total: ({totalItems})</h4>
                    <table className="table table-light table-over table-striped table-hover m-0">
                        <tbody>
                            {items.map((item,index) => {
                                return(
                                    <tr key={index}>
                                        <td>
                                            <img className="image-responsive" src={item.img} style={{height: '6rem'}} alt=""/>
                                        </td>
                                        <td>{ item.title}</td>
                                        <td>UGX { item.price}</td>
                                        <td>{ item.quantity}</td>
                                        <td>
                                            <button
                                                className="btn btn-light ms-2"
                                                onClick={() =>updateItemQuantity(item.id,item.quantity -1)}
                                            >-</button>
                                            <button
                                                className="btn btn-light ms-2"
                                                onClick={() =>updateItemQuantity(item.id,item.quantity + 1)}
                                            >+</button>
                                            <button
                                                className="btn btn-light ms-2"
                                                onClick={() =>removeItem(item.id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto mb-3 mt-5">
                    <h2>Cart Total: UGX { cartTotal }</h2>
                </div>
                <div className="col-12 ms-5 mb-5">
                    <button 
                        className="btn btn-light mx-4"
                        onClick={() =>emptyCart()}
                    >
                        <FaTrash />
                    </button>
                    <button className="btn btn-warning btn-lg pe-5 ps-5 rounded-pill">Order</button>
                </div>
            </div>
        </div>
    );
}
 
export default Cart;