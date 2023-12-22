import React from 'react'
import "./Navbar.css"
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbarwrapper">
            <div className="navleft">
                <h2 className='title'>Admin</h2>
                <input type="text" placeholder='search here' className='search' />
            </div> 
             
            <div className="navright">
                <div className="iconsContainer">
                    <IoMdNotificationsOutline className='icons'/>
                    <span className="topBadge">
                        2
                    </span>
                </div>
                <div className="iconsContainer">
                    <MdOutlineLanguage className='icons'/>
                    <span className="topBadge">
                        2
                    </span>
                </div>
                <div className="iconsContainer">
                    <CiSettings className='icons'/>
                </div>
                <img src="assets/pic/passport_size.jpg" alt="Ashutosh" className='profile_pic' />
            </div>
        </div>
    </div>
  )
}
