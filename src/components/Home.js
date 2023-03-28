import React from "react";
import CardSlider from "./CardSlider";
import Homeabout from "./Home_About";
import Trust from "./Trust";
import Welcome from "./Welcome";

const Home = () => {
    return (
        <section className="content-wrapper">
            <Welcome />
            <CardSlider />
            <Homeabout />
            <Trust />
        </section>
    )
}

export default Home;