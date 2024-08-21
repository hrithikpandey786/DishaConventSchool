import "./navbar.scss";
import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){
    return (
        <navbar className="navbar">
            <div className="logo">
                <img src="./logo.png" alt="logo"></img>
                <h1><Link to="/">Disha Convent School</Link></h1>
            </div>
            <div className="options">
                <p style={{color: "#931919"}}>Home</p>
                <p>About Us</p>
                <p>Message</p>
                <p>CBSE Mandatory</p>
                <p>Academics</p>
                <p>Gallery</p>
                <p>Office Bearers</p>
                <p>Rules</p>
                <p>TC</p>
                <p>Achievements</p>
            </div>
        </navbar>
    )
}