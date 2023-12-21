import React from 'react'
import "./Navbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

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
                    <NotificationsNoneIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}
