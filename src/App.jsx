import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import ViewTicket from './pages/viewTickect/ViewTicket'
import CreateTicket from './pages/createTicket/CreateTicket'
import Login from './pages/login/Login'
import Register from './pages/Register/Register'
import PrivateRoutes from './components/privateRoutes/PrivateRoutes'
import {Navbar} from './components/navbar/Navbar'


function App() {
  return (
    <>
      <Navbar/>
     <Routes>
      <Route path='/' index element={<Home/>}/>
    
      {/*
      Protected Routes
      <Route path="/viewTicket" element={<PrivateRoutes/>}>
      <Route path='/viewTicket' element={<ViewTicket/>}/>
      </Route>
      <Route path="/createTicket" element={<PrivateRoutes/>}>
      <Route path='/createTicket' element={<CreateTicket/>}/>
      </Route> */}
      <Route path="/login" element={<Login/>}/>
      <Route path="/viewTicket" element={<ViewTicket/>}/>
      <Route path="/createTicket" element={<CreateTicket/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
   
  )
}

export default App