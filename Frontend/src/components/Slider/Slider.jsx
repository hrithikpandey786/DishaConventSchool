import "./slider.scss";
import React from "react";
import arr from "../../lib/slider-images.jsx";

export default function Slider(){
    const [index, setIndex] = React.useState(0);

    React.useEffect(()=>{
        const idx = setInterval(()=>{
            return setIndex(prev=>(prev+1)%arr.length);
        }, 3000)

        return() => clearInterval(idx);
    }, [])

    return (
        // <div className="slider-container">
        //     <div className="slide">
        //         <img src={arr[index]}></img>
        //     </div>
        // </div>


        <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={arr[index%arr.length]} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={arr[(index+1)%arr.length]} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={arr[(index+2)%arr.length]} class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    )
}