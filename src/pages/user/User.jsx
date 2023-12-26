import React from 'react'
import "./user.css"
import passportSize from "../../../assets/pic/passport_size.jpg"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Filter9PlusIcon from '@mui/icons-material/Filter9Plus';
import EmailIcon from '@mui/icons-material/Email';

export const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User</h1>
            <button className="userButton">
                Create
            </button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img className="userShowImage" src={passportSize} alt="User" />
                    <div className="userShowTopTitle">
                        <h3 className="userShowUserName">Ashutosh Anand Sharma</h3>
                        <span className="userShowUserTitle">Berozgar</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowBttomTitle">
                        Account Details
                    </span>
                    <div className="userShowBottomContainer">
                        <PermIdentityIcon className="userShowBottomIcon"/>
                        <span className="userShowInfoTitle">
                            ashutosh007
                        </span>
                    </div>
                    <div className="userShowBottomContainer">
                        <CalendarMonthIcon className="userShowBottomIcon"/>
                        <span className="userShowInfoTitle">
                            07-07-2000
                        </span>
                    </div>
                    <span className="userShowBttomTitle">
                        Contact Details
                    </span>
                    <div className="userShowBottomContainer">
                        <Filter9PlusIcon className="userShowBottomIcon"/>
                        <span className="userShowInfoTitle">
                            +91 1111111111
                        </span>
                    </div>
                    <div className="userShowBottomContainer">
                        <EmailIcon className="userShowBottomIcon"/>
                        <span className="userShowInfoTitle">
                            ashutosh@gmail.com
                        </span>
                    </div>
                    
                </div>
            </div>
            <div className="userUpdate">

            </div>
        </div>
    </div>
  )
}
