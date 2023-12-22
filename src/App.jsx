import React from 'react'
import { Navbar } from './Components/Navbar/Navbar.jsx'
import { Sidebar } from './Components/sidebar/Sidebar.jsx'
import "./App.css"
import { Home } from './pages/home/Home.jsx'

function App(){
  return (<div>
    <Navbar/>
    <div className="container">
      <Sidebar/>
      <Home/>
    </div>
  </div>)
}

export default App
 

