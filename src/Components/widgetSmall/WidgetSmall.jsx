import React from 'react'
import "./widgetSmall.css"
import { MdVisibility } from "react-icons/md";

export const WidgetSmall = () => {
  return (
    <div className='widgetSmall'>
        <span className="widgetSmallTitle">
            New Members
        </span>
        <ul className="widgetSmallList">
            <li className="widgetSmallListItem">
                <img src="assets/pic/Users.jpg" alt="" className="userProfile" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">Hina Sharma</span>
                    <span className="widgetSmallUsertitle">Teacher</span>
                </div>
                <button className="widgetSmallButton">
                    <MdVisibility/>
                    Display
                </button>
            </li>
            <li className="widgetSmallListItem">
                <img src="assets/pic/Users.jpg" alt="" className="userProfile" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">Hina Sharma</span>
                    <span className="widgetSmallUsertitle">Teacher</span>
                </div>
                <button className="widgetSmallButton">
                    <MdVisibility/>
                    Display
                </button>
            </li>
            <li className="widgetSmallListItem">
                <img src="assets/pic/Users.jpg" alt="" className="userProfile" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">Hina Sharma</span>
                    <span className="widgetSmallUsertitle">Teacher</span>
                </div>
                <button className="widgetSmallButton">
                    <MdVisibility/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
