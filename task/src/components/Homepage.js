
import React from 'react';
import { FaSearch } from "react-icons/fa";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

function Homepage() {
    return (

        <>

            <div className="homepage-all">

                <div className="homepage-items">

                    <div className="homepage-main">

                        <div ><FaCircle className='home-ticon' />
                        </div>
                        <div>
                            <input type="text" />
                            <FaSearch className='home-search abs' />
                        </div>


                        <div className="home-hamb" >
                            <RxHamburgerMenu className='home-ticon' />
                        </div>
                    </div>






                </div>

                <div className="home-ico"><button className='home-page-button-top'>#top</button></div>
                <div className='home-title'><h1>A Responsibly As Teach, Leading Global Company  </h1></div>
                <div className='home-title'><h3>Creating Superior Products & Services  </h3></div>

                <div className="icon-title">
                    <div className="staricon"><IoStar className='icon-title-icon' /></div>

                    <div className="icon-title-text">
                        <h3>Trust Pilot</h3>
                        <p>Rate Best &nbsp;<span>12.6k</span>&nbsp; Reviews</p>
                    </div>
                </div>
                <div className='home-images'>
                    <div className="home-images-tv"> <span>Play</span> </div>
                    <div className="home-images-cpu">
                        <span>72%</span>

                        <div className="home-images-keyboard"><span>28%</span></div>
                    </div>


                </div>

                {/* <div className="md-center-1">

                <div className='home-images-copy'>
                    <div className="home-images-copy-tv"> <span>Play</span> </div>
                    <div className="home-images-copy-cpu">
                        <span>72%</span>

                        <div className="home-images-copy-keyboard"><span>28%</span></div>
                    </div>


                </div> */}


                <div className="home-page-buttton  home-page-buttton-bottom">Signup to Get 50% OFF</div>

                <div className="home-page-buttton home-page-buttton-bottom">Explore New Products</div>

            </div>





            {/* <div className="md-center-2">
                    <div className="home-page-buttton-copy  home-page-buttton-bottom-copy">Signup to Get 50% OFF</div>

                    <div className="home-page-buttton-copy home-page-buttton-bottom -copy">Explore New Products</div>
                </div> */}
            {/* </div> */}






        </>
    )
}

export default Homepage;