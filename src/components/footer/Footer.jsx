import React from "react";
import './FooterStyle.css'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Copyright © 2023 Multilanguage, Inc.</span>
            <div className="social-icons">
                <div className="icon">
                    <Link target="blank" to='https://www.facebook.com/manoj.chowdhury.9659/'><FaFacebookF size={14} /></Link>
                    
                </div>
                <div className="icon">
                    <Link target="blank" to='https://twitter.com/manoj295292?t=rUvhzaMKMrwq7Xl6DZuRzg&s=09'><FaTwitter size={14} /></Link>
                    
                </div>
                <div className="icon">
                    <Link target="blank" to='https://www.instagram.com/_manojchowdhury_/'><FaInstagram size={14} /></Link>
                </div>
                <div className="icon">
                    <Link target="blank" to='https://www.linkedin.com/in/manojchowdhury/'><FaLinkedinIn size={14} /></Link>
                </div>
            </div>
        </div>
    </div>;
};

export default Footer;
