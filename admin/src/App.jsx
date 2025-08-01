import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import { useState,useEffect } from 'react'
import { ToastContainer } from 'react-toastify';


export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = 'Rs'

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(() =>{
     localStorage.setItem('token', token);
  }, [token]);


  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {token === ""
        ? <Login setToken={setToken}/>
        : <>
          <Navbar setToken={setToken} />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw, 25px)], my-8 text-gray-600 text-base'>
              <Routes>
                <Route element={<Add token={token}/>} path='/add' />
                <Route element={<List token={token} />} path='/list' />
                <Route element={<Orders token={token} />} path='/orders' />
              </Routes>
            </div>

          </div>
        </>

      }


    </div>
  )
}

export default App
