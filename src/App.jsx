import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Display} from './pages/displayTransation'
import {Home}from './pages/home';
import Login from './pages/login';
import Test from './pages/test';
import Add from './pages/add'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
 
  return (
    <>
    <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='./pages/displayTransation.jsx' element={<Display/>}/>
    </Routes>
    
   
  
    
    
  
    
    
    
    </>
  )
}

export default App
