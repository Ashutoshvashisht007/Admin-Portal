import React from 'react'
import { Navbar } from './Components/Navbar/Navbar.jsx'
import { Sidebar } from './Components/sidebar/Sidebar.jsx'
import "./App.css"
import { Home } from './pages/home/Home.jsx'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { UserList } from './pages/userList/UserList.jsx'

function App(){
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Sidebar/>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="users" element={<UserList/>}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
 

