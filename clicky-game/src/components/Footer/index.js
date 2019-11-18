import React from "react";
import "./style.css";

// Development Image Source
// src="/assets/images/react-logo.png"

function Footer() {
    return (
        <div className="container-fluid footer-div">
            <footer className="footer font-weight-bold">
                Memory Game <img className="tinyLogo" alt="React logo" src="./assets/images/react-logo.png"></img>
            </footer>
        </div>
    )
}

export default Footer;