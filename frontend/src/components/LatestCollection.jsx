import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

const { products } = useContext(ShopContext);
const [LatestProducts,setLatestProducts] = useState([]);

useEffect(()=>{
    setLatestProducts(products.slice(0,10));
},[products])


  

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'}  text2= {'COLLECTION'}/>
        <p className='w-3/4 m-auto text-xs   sm:text-sm md:text-base text-gray-950'>
        "Discover our latest collection of premium clothing materials, featuring trendy fabrics and stylish designs for every occasion!"</p>

      </div> 
      {/* Rendering products */}
      <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          LatestProducts.map((items,index)=>(
            <ProductItem key={index} id={items._id} image={items.image} name={items.name} price={items.price} range={items.range}/>
          ))
        }

      </div>
    </div>
  )
}

export default LatestCollection
