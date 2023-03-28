import React from "react";
import hardcorn from '../images/hardcon.jpg';

const Home_About = () => {
    return (
        <div className="home-about text-center py-5 border-bottom">
            <div className="about-img">
                <img src={hardcorn} alt="" height={240} width={350}/>
            </div>
            <div className="home-about-wrapper">
                <h1 className="text-dark p-2">Taste it</h1>
                <div className="text-wrapper">
                    <p className="">
                        Taste our delicious hardcon in a snackway<br />
                        by customers within Kampala as early as possible<br />
                        so that customers get everything in time
                    </p>
                    {/* <button className="btn btn-warning btn-lg rounded-pill px-4">Explore</button> */}
                </div>
            </div>
        </div>
    )
}

export default Home_About;
