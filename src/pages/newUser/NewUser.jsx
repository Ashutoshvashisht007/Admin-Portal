import React from 'react'
import "./newuser.css";

export const NewUser = () => {
  return (
    <div className='newUser'>
        <h1 className="newUserTitle">
            New User
        </h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" className="newUserInput" placeholder='John'/>
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" className="newUserInput" placeholder='John Doe'/>
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="text" className="newUserInput" placeholder='johndoe@gmail.com'/>
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" className="newUserInput" placeholder='password'/>
            </div>
            <div className="newUserItem">
                <label>Phone Number</label>
                <input type="text" className="newUserInput" placeholder='+91 1234567890'/>
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input type="text" className="newUserInput" placeholder='Ropar | Punjab'/>
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                    <div className="labelGender">
                        <input type="radio" name='gender' id='male' value="male"/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name='gender' id='female' value="female"/>
                        <label htmlFor="female">Female</label>
                    </div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select className='newUserSelect' name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
        </form>
        
    </div>
  )
}
