import "./homepage.scss";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import {director_mssg, principal_mssg, about} from "../../lib/texts.jsx";


export default function HomePage(){
//     const myCarouselElement = document.querySelector('#myCarousel')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// })
    return(
        <div className="homepage-container">
            <Slider/>
            
            {/* <img src="pic4.jpg" alt="pic4"></img> */}
            <div className="message-section">
                {/* <div className="top">
                    <div className="chairman-message">
                        <div className="head">
                            <h3>Chairman Message</h3>
                        </div>
                        <h2>Mr. Pandey</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Odio voluptates amet qui, dicta earum quisquam, 
                            consequuntur laboriosam consectetur assumenda incidunt 
                            vitae quaerat illum fugit fuga repudiandae iste! Vel, maxime sunt.
                        </p>
                        <div className="link">
                            <p><Link to={HomePage}>Read More</Link></p>
                        </div>
                    </div>
                </div> */}
                <div className="bottom">
                    <div className="director-message">
                        <div className="head">
                            <h3>Director Message</h3>
                        </div>
                        <h2>Mrs. Pooja Pandey</h2>
                        <p>{director_mssg}</p>
                        <div className="link">
                            <p><Link to={HomePage}>Read More</Link></p>
                        </div>
                    </div>
                    <div className="principal-message">
                        <div className="head">
                            <h3>Principal Message</h3>
                        </div>
                        <h2>Mr. Sandeep Mishra</h2>
                        <p>{principal_mssg}</p>
                        <div className="link">
                            <p><Link to={HomePage}>Read More</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section">
                    <h3>About the school</h3>
                    <p>{about}</p>
            </div>

            <div className="choose-us">
                <h3>WHY CHOOSE US</h3>
                <div class="aot-separator">
                    <div class="aot-separator-style"> </div>
                </div>
                <p>The Management, Staff and Students are committed to the mission and work together to obtain exceptional results
                in the academic, co-curricular, extra-curricular arenas for a productive life.</p>
            </div>
        </div>
    )
}