import React from 'react'
import "./sidebar.css"
import { IoIosHome } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import { FiUser, FiMessageSquare } from "react-icons/fi";
import { MdOutlineProductionQuantityLimits, MdOutlineFeedback, MdOutlineReport } from "react-icons/md"
import { FaDollarSign } from "react-icons/fa6";
import { FaRegChartBar } from "react-icons/fa";
import { CiMail, CiStopwatch } from "react-icons/ci";
import { Link } from 'react-router-dom';


export const Sidebar = () => {

  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className='sideBarTitle'>Dashbaord</h3>
                <ul className="sideBarList">
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <li className="sideBarListItem active">
                        <IoIosHome className='sidebarIcons'/>
                        Home
                    </li>
                </Link>
                    <li className="sideBarListItem">
                        <AiOutlineStock className='sidebarIcons'/>
                        Analytics
                    </li>
                    <li className="sideBarListItem">
                        <AiOutlineStock className='sidebarIcons'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sideBarTitle'>Quick Menu</h3>
                <ul className="sideBarList">
                    <Link to="/users" style={{ textDecoration: "none", color: "inherit" }}>
                        <li className='sideBarListItem'>
                            <FiUser className='sidebarIcons'/>
                            Users
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none", color: "inherit" }}>
                        <li className='sideBarListItem'>
                            <MdOutlineProductionQuantityLimits className='sidebarIcons'/>
                            Products
                        </li>
                    </Link>
                    <li className='sideBarListItem'>
                        <FaDollarSign className='sidebarIcons'/>
                        Transactions
                    </li>
                    <li className='sideBarListItem'>
                        <FaRegChartBar className='sidebarIcons'/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sideBarTitle'>Notifications</h3>
                <ul className="sideBarList">
                    <li className='sideBarListItem'>
                        <CiMail className='sidebarIcons'/>
                        Mail
                    </li>
                    <li className='sideBarListItem'>
                        <MdOutlineFeedback className='sidebarIcons'/>
                        Feedback
                    </li>
                    <li className='sideBarListItem'>
                        <FiMessageSquare className='sidebarIcons'/>
                        Messages
                    </li>
                </ul>
                
            </div>
            <div className="sidebarMenu">
                <h3 className='sideBarTitle'>Staff</h3>
                <ul className="sideBarList">
                    <li className='sideBarListItem'>
                        <CiStopwatch className='sidebarIcons'/>
                        Manage
                    </li>
                    <li className='sideBarListItem'>
                        <AiOutlineStock className='sidebarIcons'/>
                        Analytics
                    </li>
                    <li className='sideBarListItem'>
                        <MdOutlineReport className='sidebarIcons'/>
                        Report
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}
