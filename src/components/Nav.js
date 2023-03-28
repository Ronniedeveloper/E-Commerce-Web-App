import React from "react";
import img from '../images/row_2.jpg';
import { FaCartPlus,FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Navigation = () => {
    const {totalUniqueItems} = useCart();

    return(
        <nav className="nav d-flex fixed-top bg-dark">
            <Link to='/' className="logo-container me-5 pe-4">
                <img className='rounded-pill' src={img} alt=''height={57} width={60}/>
                <span className="mx-2 pt-2 text-warning">Sneek</span>
            </Link>
            <div className="nav-links mx-4">
                <ul className="ul list-inline d-flex pt-3">
                    <a href="/" className="mx-2">
                        <li className="active text-warning">Home</li>
                    </a>
                    <Link to="/products" className="mx-2">
                        <li className="text-warning">Products</li>
                    </Link>
                    <a href="/about" className="mx-2">
                        <li className="text-warning">About</li>
                    </a>
                    <a href="/contact" className="mx-2">
                        <li className="text-warning">Contact</li>
                    </a>
                </ul>
            </div>
            <div className="cart-container">
                <Link to='/cart'>
                    <span className="badge bg-warning text-dark rounded-circle">{totalUniqueItems}</span>
                    <FaCartPlus className="mt-4 me-5 text-danger"/>
                </Link>
                <Link to='/search'>
                    <FaSearch className="mt-4 me-5 text-danger"/>
                </Link>
            </div>
        </nav>
    )
}

export default Navigation;