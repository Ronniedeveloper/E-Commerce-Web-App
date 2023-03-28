import React from "react";
import about from '../images/fast_delivery.jpg';
import { Link } from "react-router-dom";

const Home_About = () => {
    return (
        <div className="home-about text-center py-5 border-bottom">
            <div className="home-about-wrapper">
                <h1 className="text-dark p-2">Our goal</h1>
                <div className="text-wrapper">
                    <p className="">
                        Our goal is to deliver desired products ordered<br />
                        by customers within Kampala as early as possible<br />
                        so that customers get everything in time
                    </p>
                    <Link to="/products">
                        <button className="btn btn-warning btn-lg rounded-pill px-4">Explore</button>
                    </Link>
                </div>
            </div>

            <div className="about-img">
                <img src={about} alt="" height={240} width={350}/>
            </div>
        </div>
    )
}

export default Home_About;
