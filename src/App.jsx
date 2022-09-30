import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar';
import Index from './components/Index';
import Footer from './components/Footer';




const App = () => (
  <div className="max-w-screen min-h-screen bg-backgound overflow-hidden">
    <Navbar />
    <Routes>
      <Route path='/' element={<Index />} ></Route>
      <Route path='/aboutMe' element={<Index />} ></Route>
    </Routes>

    <Footer />
  </div >
)


export default App
