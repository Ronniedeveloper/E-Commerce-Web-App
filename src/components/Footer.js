import { FaFacebook,FaInstagram,FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="row">
                <div className="content-container">
                    <div className="links">
                        <Link to="">
                            <FaFacebook className="facebook"/>
                        </Link>
                        <Link to="">
                            <FaInstagram className="instagram"/>
                        </Link>
                        <Link to="">
                            <FaWhatsapp className="whatsapp"/>
                        </Link>
                    </div>
                    <div className="about">
                        <h4>About Us</h4>
                        <p>Our goal is to deliver<br /> desired products ordered
                        by customers<br /> within Kampala as early as possible<br />
                        so that customers get everything in time</p>
                    </div>
                    <div className="contact">
                        <h4>Contact Us</h4>
                        <p>Our goal is to deliver<br /> desired products ordered
                        by customers<br /> within Kampala as early as possible<br />
                        so that customers get everything in time</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;