import React from 'react';
import { MdOutlineMan4 } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalDining } from "react-icons/md";
import { RiTakeawayFill } from "react-icons/ri";

function Orders() {
  return (

    <div className="order-all">

      <div className="order-items order-items-11">

        <div className="order-items-row1 ">
          <h3>Revenue</h3>
          <h3 className='order-precentege order-precentege-11'> <span><FaArrowDown className="precentage-icon precentage-icon-11 "/></span>10%</h3>
        </div>
        <div className="order-items-row2">
          <CgArrowTopRight  class="tr-icon tr-icon-11" />
          <h1>$2.047</h1>



        </div>


      </div>

      <div className="order-items  order-items-22 ">

        <div className="order-items-row1">
          <h3>Orders</h3>
          <h3 className='order-precentege order-precentege-22'> <span><FaArrowUp className="precentage-icon precentage-icon-22"/></span>20%</h3>
        </div>
        <div className="order-items-row2">
          <FaShoppingCart class="tr-icon tr-icon-22" />
          <h1>356</h1>



        </div>


      </div>

      <div className="order-items  order-items-33">

        <div className="order-items-row1">
          <h3>Dine in</h3>
          <h3 className='order-precentege order-precentege-33'> <span><FaArrowUp className="precentage-icon precentage-icon-33"/></span>10%</h3>
        </div>
        <div className="order-items-row2">
          <MdLocalDining   className="tr-icon tr-icon-33" />
          <h1>220</h1>



        </div>


      </div>

      <div className="order-items order-items-44">

        <div className="order-items-row1">
          <h3>Take away</h3>
          <h3 className='order-precentege order-precentege-44'> <span><FaArrowDown className="precentage-icon precentage-icon-44"/></span>5%</h3>
        </div>
        <div className="order-items-row2">
          < RiTakeawayFill className="tr-icon tr-icon-44" />
          <h1>135</h1>



        </div>


      </div>




    </div>




  )
}

export default Orders;