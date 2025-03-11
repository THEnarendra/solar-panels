import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutus from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';

AOS.init();

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<Aboutus/>} />
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/solar-panels' element={<Products/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
