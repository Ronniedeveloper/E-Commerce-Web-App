import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket} from 'react-icons/fa';
import Discover from "./Discover";
import gnut from '../images/peanut_1.jpg'
import dataCard from './dataCard'


const Welcome = () => {
    return(
        <div className="welcome-container mt-5 row ms-5">
            <div className="about-text">
                <div className="welcome-text p-2">
                    <div className="text-container">
                        <h1 className="px-4">SNACK WITH NO LIMITS</h1>
                        <div className="d-flex p-4 m-0">
                            <FaShoppingBasket size={45} className='text-info'/>
                            <p className="ps-4">
                                When you are on the go and <br /> don't have time to
                                make<br /> your snack shopping.<br /> Send us anywhere, anytime
                                <br />and any place
                            </p>
                        </div>
                    </div>
                    <div className="button-container d-flex px-4">
                        <Link to='/cart'>
                            <button className="btn btn-warning btn-lg rounded-pill">Order now</button>
                        </Link>
                    </div>
                </div>

                <div className="image-container pt-3">
                    <img src={gnut}alt="" className="img-fluid" height={550} width={550}/>
                </div>
            </div>

            <div className="discover mt-4 row justify-content-center bg-dark text-white">
                <div className="row discover-text">
                    <h1 className=" col-12 text-center pt-4">Discover</h1>
                    <p className="col-12 text-center">
                        Discover products  at a discount price <br />
                        from the comfort of your zone and it will be <br />
                        delivered to you
                    </p>
                </div>

                { dataCard.cardData.map((item,index) => {
                    return(
                        <Discover img={item.img} title={item.title} key={index} />
                    )
                })}
                <div className="text-center pb-4">
                    <Link to="/products">
                        <button className="btn btn-lg btn-warning px-4 rounded-pill">Discover</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Welcome;