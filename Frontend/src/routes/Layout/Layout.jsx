import "./layout.scss";
import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";

export default function Layout(){
    return(
        <div className="layout-container">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="body">
                <Outlet/>
            </div>
        </div>
    )
}