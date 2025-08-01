import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'


const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'> 
        <Title text1={'CONTACT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img className='w-full md:max-w-[480px]' src={assets.contact} alt=""/>
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl text-gray-900'>Our Store</p>
        <p className='text-emerald-950'>NO-15/A William Road<br/>Colombo,SriLanka</p>
        <p className='text-emerald-950'>📞Phone:  +94 77 123 4567 <br/>Email:  support@fabricmart.lk</p>
        <p className='font-semibold text-xl text-emerald-900'>Careers at Fabricmart</p>
        <p className='text-emerald-950'>Learn more our teams and job openings</p>
        <button className='border border-amber-900 px-8 py-4 text-sm hover:bg-amber-500 hover:text-black transition-all duration-500'>Explore Jobs</button>
    

      </div>

      </div>
      
    </div>
  )
}

export default Contact
