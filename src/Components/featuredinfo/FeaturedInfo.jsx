import React from 'react'
import "./Featuredinfo.css"
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className='featuredTitle'>Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$100</span>
                <span className="featuredMoneyRate">-11.4
                    <FaAngleDown className='featuredIcon negative'/>
                </span>
            </div>
        

        <span className="featuredSub">
            Compared to last Item
        </span>
        </div>
        <div className="featuredItem">
            <span className='featuredTitle'>Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$100</span>
                <span className="featuredMoneyRate">-11.4
                    <FaAngleDown className='featuredIcon negative'/>
                </span>
            </div>
        

        <span className="featuredSub">
            Compared to last Item
        </span>
        </div>
        <div className="featuredItem">
            <span className='featuredTitle'>Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$100</span>
                <span className="featuredMoneyRate">11.4
                    <FaAngleUp className='featuredIcon'/>
                </span>
            </div>
        

        <span className="featuredSub">
            Compared to last Item
        </span>
        </div>
    </div>
  )
}
