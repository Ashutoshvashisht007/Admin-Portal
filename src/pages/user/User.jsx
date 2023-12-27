import React from 'react'
import "./user.css"
import passportSize from "../../../assets/pic/passport_size.jpg"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Filter9PlusIcon from '@mui/icons-material/Filter9Plus';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';

export const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User</h1>
            <Link to="/newUser" style={{ textDecoration: "none", color: "inherit" }}>
                <button className="userButton">
                    Create
                </button>
            </Link>
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
                    <div className="userShowBottomContainer">
                        <HomeIcon className="userShowBottomIcon"/>
                        <span className="userShowInfoTitle">
                            Ropar | Punjab
                        </span>
                    </div>
                    
                </div>
            </div>
            <div className="userUpdate">
                <h3 className="userUpdateTitle">
                    Edit
                </h3>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='ashutosh007'
                            className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>FullName</label>
                            <input type="text" placeholder='Ashutosh Anand Sharma'
                            className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder='ashutosh@gmail.com'
                            className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone NUmebr</label>
                            <input type="text" placeholder='+91 1111111111'
                            className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='Ropar | Punjab'
                            className="userUpdateInput" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src={passportSize} alt="User Profile" className="userUpdateRightimg" />
                            <label htmlFor="file" style={{cursor: "pointer", fontSize:"30px"}}><PublishIcon/></label>
                            <input type="file" id='file' style={{display: "none"}}/>
                        </div>
                    <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
