import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
    <div className='w-full sm:w-1/2 flex items-center justify-center py-10  sm:py-0' >
    <div className='text'>
        <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-amber-400'></p>
            <p className='font-medium text-sm md:text-base'> OUR BEST SELLERS</p>

        </div>
        <h1 className='text-3xl sm:px-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
        <div className='flex items-center gap-2'>
           <p className='font-semibold text-sm md:text-base'> SHOP NOW</p>
           <p className='w-8 md:w-11 h-[2px] bg-amber-400'></p>
     
        </div>

    </div>
    </div> 
    <img  src={assets.hero} className='w-full sm:w-1/2' alt="" /> {" "}
    </div>
  )
}

export default Hero
