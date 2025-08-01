import React from 'react';
import {  Routes , Route } from 'react-router-dom';

import Home from './pages/home'
import Collection from './pages/Collection';
import About from './pages/about'
import Product from './pages/product';
import Contact from './pages/contact';
import Orders from './pages/Orders';
import Login from './pages/login';
import Cart from './pages/cart';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import PlaceOrder from './pages/PlaceOrder';
import { ToastContainer  } from 'react-toastify';
import Verify from './pages/Verify';




function App() {


  return (
    
    
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
         <ToastContainer />
       
      <Navbar/>
      <SearchBar/>
   
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Collection/>} path='/Collection'/>
          <Route element={<About/>} path='/about'/>
          <Route element={<Product/>} path='/product/:productId'/>
          <Route element={<Contact/>} path='/contact'/>
          <Route element={<Orders/>} path='/Orders'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<Cart/>} path='/cart'/>
           <Route element={<PlaceOrder/>} path='/place-order'/>
           <Route element={<Verify/>} path='/verify'/>

          
          
        </Routes>
        <Footer/>
        </div>
      
      
    
  )
}

export default App 
