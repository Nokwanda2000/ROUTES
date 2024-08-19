import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './pages/displayTransation'
import Home from './pages/home';
import Login from './pages/login';
import Test from './pages/test';
import Add from './pages/add'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Display />}
      ></Route>
      <Route index element={<Home add={Display} />}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path="/add" element={<Add/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
