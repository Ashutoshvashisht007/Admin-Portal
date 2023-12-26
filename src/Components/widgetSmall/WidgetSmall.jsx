import React from 'react'
import "./widgetSmall.css"
import { MdVisibility } from "react-icons/md";
import userspic from "../../../assets/pic/Users.jpg"

export const WidgetSmall = () => {
  return (
    <div className='widgetSmall'>
        <span className="widgetSmallTitle">
            New Members
        </span>
        <ul className="widgetSmallList">
            <li className="widgetSmallListItem">
                <img src={userspic} alt="" className="userProfile" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">Hina Sharma</span>
                    <span className="widgetSmallUsertitle">Teacher</span>
                </div>
                <button className="widgetSmallButton">
                    <MdVisibility className="widgetSmallIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmallListItem">
                <img src={userspic} alt="" className="userProfile" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">Hina Sharma</span>
                    <span className="widgetSmallUsertitle">Teacher</span>
                </div>
                <button className="widgetSmallButton">
                    <MdVisibility className="widgetSmallIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmallListItem">
                <img src={userspic} alt="" className="userProfile" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">Hina Sharma</span>
                    <span className="widgetSmallUsertitle">Teacher</span>
                </div>
                <button className="widgetSmallButton">
                    <MdVisibility className="widgetSmallIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmallListItem">
                <img src={userspic} alt="" className="userProfile" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">Hina Sharma</span>
                    <span className="widgetSmallUsertitle">Teacher</span>
                </div>
                <button className="widgetSmallButton">
                    <MdVisibility className="widgetSmallIcon"/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
