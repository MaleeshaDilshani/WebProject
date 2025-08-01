import React, { useContext, useState } from "react"
import {assets} from '../assets/assets'
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";


const Navbar = () => {
 
    const [visible,setVisible] = useState(false);
    const {setShowSearch , getCartCount, navigate,  token, setToken, setCartItems} = useContext(ShopContext);
    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
        
    }
    
    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <img src={assets.logo} className='w-35' alt=""/>
            <ul className='hidden sm:flex gap-5 text-sm text-black'>

                <NavLink to="/"className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className="w-2/4 border-none h-[1.5px] text-black hidden"/>
                </NavLink>
            <NavLink to="/collection"className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] text-black hidden"/>
            </NavLink>
            <NavLink to="/about"className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] text-black hidden"/>
            </NavLink>
            <NavLink to="/contact"className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] text-black hidden"/>
            </NavLink>
            
            </ul>

            <div className="flex items-center gap-6">
                <img onClick={()=>setShowSearch(true)}  src={assets.search} className='w-5 cursor-pointer'  alt=""/>
        </div>
        <div className='group relative'>
                
                <img onClick={()=> token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile}  alt=""/>
                {/* Dropdown Menu */}
                {token &&
                 <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
                    <p className="cursor-pointer hover:text-black">My Profile</p>
                    <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                    <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
                    </div> </div>}
        </div>
        <Link to='/cart' className="relative">
        <img src={assets.cart} className="w-10 min-w-10" alt="" />
        <p className="absolute right-[1px] bottom-[-0] w-6 text-center leading-4 bg-black text-white aspect-square rounded-full text-[12px]">{getCartCount()}</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu} className="w-8 cursor-pointer sm:hidden" alt=""></img>
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-black'>
            <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                <img className="h-4 rotate-180" src={assets.drop} alt=""/>
                    <p>Back</p>

                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-1 pl-4 ' to='/'>Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-1 pl-4 ' to='/collection'>Collection</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-1 pl-4 ' to='/about'>About</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-1 pl-4 ' to='/contact'>Contact</NavLink>
            
                

            </div>


        </div>
        </div>
        

        
        
    )
}

export default Navbar