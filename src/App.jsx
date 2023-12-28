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
import { User } from './pages/user/User.jsx'
import { NewUser } from './pages/newUser/NewUser.jsx'
import { Products } from './pages/products/Products.jsx'
import { EditProduct } from './pages/editproduct/EditProduct.jsx'

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
              <Route path="user/:userId" element={<User/>}/>
              <Route path="newUser" element={<NewUser/>}/>
              <Route path="products" element={<Products/>}/>
              <Route path="products/:productId" element={<EditProduct/>}/>
              <Route path="newProduct" element={<NewUser/>}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
 

