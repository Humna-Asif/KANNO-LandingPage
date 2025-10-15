import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page1 = () => {


    // useEffect(() => {
    //     gsap.fromTo('.pg1-heading', {
    //         y: '-200%'
    //     }, {
    //         y: '0%', delay: 0.3, duration: 1, ease: 'power4.out'
    //     })
    // }, [])

    return (
        <div id='pg-1'>
            <div id='hidden-section'>
                <div className="side-img">
                    <img src='img-1.png'></img>
                </div>
                <div id="centre-img">

                </div>
                <div className="side-img">
                    <img src='img-4.png'></img>
                </div>
            </div>
            <h1 id="pg1-heading">KANNO</h1>
            <div id='hidden-text'>
                <p>UNIQUENESS
                    <br></br>
                    STYLISH DESIGN
                    <br></br>
                    HIGHT-QUALITY MATERIALS
                    <br></br>
                    <span>
                        VIEW ALL PRODUCTS
                    </span>
                </p>
            </div>

            <div id="pg1-bottom">
                <div className="bottom-sides">
                    <div id='left-text'>
                        <p>UNIQUENESS
                            <br></br>
                            STYLISH DESIGN
                            <br></br>
                            HIGHT-QUALITY MATERIALS
                        </p>
                    </div>
                    <div className='img-container'>
                        <img src='img-1.png'></img>
                        <img src='img-2.png'></img>

                    </div>
                </div>
                <div id="bottom-centre"></div>
                <div className="bottom-sides">
                    <div id='right-text'><p>CHOOSE FURNITURE FOR YOU INTERIOR THAT WILL STAND OUT AND CREATE COMFORT AND UNIQUENESS IN YOUR HOME</p></div>
                    <div className='img-container'>
                        <img src='img-3.png'></img>
                        <img src='img-4.png'></img>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default Page1