import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,range,price,description}) => {
 

    const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-800 cursor-pointer'   to={`/product/${id}`}>
        <div className='overflow-hidden'> 
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />

        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        
        <p className='text-sm font-medium'>{range}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
        <p className='text-sm font-medium'>{description}</p>
      
    </Link>
  )
}

export default ProductItem
