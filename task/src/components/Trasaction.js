import React from 'react';
// import { IoIosMan } from "react-icons/md";
import { IoIosMan } from "react-icons/io";

function Trasaction() {
    return (
        <>


            <div className="trans-all">

                <div className="tr-head">
                    <h2 className='items t-right'>Last Tranaction</h2>
                    <h2 className="items t-left">See All</h2>

                </div>

                <div className="tr-body-all">

                    <div className="item1">

                        <div className="tr-body-item">
                            <IoIosMan className="tr-icon1" />
                        </div>



                        <div className="tr-body-item tr-body-item2">

                            <h2>ArokiJI</h2>
                            <h4>28-feb 2023  &nbsp;.06:23 PM </h4>


                        </div>


                        <div className="tr-body-item tr-body-item3 ">

                            <h2>+$13.00</h2>
                            <h4>Received</h4>


                        </div>
                    </div>

                    <div className="item1 item2">

                        <div className="tr-body-item">
                            <IoIosMan className="tr-icon1" />
                        </div>



                        <div className="tr-body-item tr-body-item2">

                            <h2>Kizaru</h2>
                            <h4>28-feb 2023 &nbsp;.06:23 PM </h4>


                        </div>


                        <div className="tr-body-item tr-body-item23 ">

                            <h2>-$9.00</h2>
                            <h4>Outgoing</h4>


                        </div>
                    </div>



                    <div className="item1">

                        <div className="tr-body-item">
                            <IoIosMan className="tr-icon1" />
                        </div>



                        <div className="tr-body-item tr-body-item2">

                            <h2>Akainu</h2>
                            <h4>28-feb 2023 &nbsp;.06:23 PM </h4>


                        </div>


                        <div className="tr-body-item tr-body-item3 ">

                            <h2>+$20.00</h2>
                            <h4>Received</h4>


                        </div>
                    </div>



                    <div className="item1">

                        <div className="tr-body-item">
                            <IoIosMan className="tr-icon1" />
                        </div>



                        <div className="tr-body-item tr-body-item2">

                            <h2>ArokiJI</h2>
                            <h4>28-feb 2023 &nbsp;.06:23 PM </h4>


                        </div>


                        <div className="tr-body-item tr-body-item3 ">

                            <h2>+$13.00</h2>
                            <h4>Received</h4>


                        </div>
                    </div>


                </div>
            </div>




        </>

    );
}

export default Trasaction;