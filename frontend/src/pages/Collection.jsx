import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {


const { products , search , showSearch } = useContext(ShopContext);
const [showFilter,setShowFilter] = useState(false);
const [filterProducts, setFilterProducts] = useState([]);
const [category,setCategory] = useState([]);
const [subCategory, setSubCategory] = useState([]);
const [color, setColor] = useState([]);
const [width, setWidth] = useState([]);
const [availability, setAvailability] = useState([]);
const [saleType, setSaleType] = useState([]);

const [sortType, setSortType] = useState("relevant");
 
const toggleCategory = (e) =>{
  if(category.includes(e.target.value)){
  setCategory(prev=> prev.filter(item => item !== e.target.value))
}else{
  setCategory(prev =>[...prev,e.target.value])
 }

}

const toggleSubCategory = (e) =>{
  if(subCategory.includes(e.target.value)){
    setSubCategory(prev=> prev.filter(item => item !== e.target.value))
  }else{
    setSubCategory(prev =>[...prev,e.target.value])
  }
} 
const toggleColor = (e) => {
  if (color.includes(e.target.value)) {
    setColor(prev => prev.filter(item => item !== e.target.value));
  } else {
    setColor(prev => [...prev, e.target.value]);
  }
};

const toggleWidth = (e) => {
  if (width.includes(e.target.value)) {
    setWidth(prev => prev.filter(item => item !== e.target.value));
  } else {
    setWidth(prev => [...prev, e.target.value]);
  }
};

const toggleAvailability = (e) => {
  if (availability.includes(e.target.value)) {
    setAvailability(prev => prev.filter(item => item !== e.target.value));
  } else {
    setAvailability(prev => [...prev, e.target.value]);
  }
}; 
const toggleSaleType = (e) => {
  if (saleType.includes(e.target.value)) {
    setSaleType(prev => prev.filter(item => item !== e.target.value));
  } else {
    setSaleType(prev => [...prev, e.target.value]);
  }
};




const applyFilter = () =>{

let productsCopy = products.slice();

if (showSearch && search) {
  productsCopy = productsCopy.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
}



if (category.length > 0){
  productsCopy = productsCopy.filter(item => category.includes(item.category));
}
if (subCategory.length > 0) {
  productsCopy = productsCopy.filter((item) =>
    subCategory.includes(item.subCategory)
  );
} 
if (color.length > 0) {
  productsCopy = productsCopy.filter(item => color.includes(item.color));
}

if (width.length > 0) {
  productsCopy = productsCopy.filter(item => width.includes(item.width));
}

if (availability.length > 0) {
  productsCopy = productsCopy.filter(item => {
    if (availability.includes('In stock only') && item.inStock) return true;
    if (availability.includes('Out of stock only') && !item.inStock) return true;
    return false;
  });
} 
if (saleType.length > 0) {
  productsCopy = productsCopy.filter(item => saleType.includes(item.saleType));
}
 





setFilterProducts(productsCopy)

}

const sortProduct = () => {
  let fpCopy = filterProducts.slice();

  switch (sortType) {
    case "low-high":
      setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
      break;

    case "high-low":
      setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
      break;

    default:
      applyFilter();
      break;
  }
}





useEffect(() => {
  applyFilter();
}, [category, subCategory, color, width, availability,saleType,search,showSearch,products]);

useEffect(() => {
  sortProduct();
}, [sortType]);

 


  return (
    
    
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/* filter options*/}
        <div className='min-w-60'>
          <p onClick={() => setShowFilter(!showFilter)}
           className='my-2 text-xl flex items-center cursor-pointer gap-2'> FILTERS
          <img src={assets.drop}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt="dropdown"/>
          </p>
           {/*  category filter */}
           <div className={`border border-b-amber-500 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}> 
            <p 
            className='mb-3 text-sm font-medium  '>CATEGORIES
          
            </p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-950'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Linen'} onChange={toggleCategory} />Linen
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Cotton'} onChange={toggleCategory} />Cotton
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Wool'} onChange={toggleCategory} />Wool
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Silk'} onChange={toggleCategory} />Silk
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Viscose'} onChange={toggleCategory} />Viscose
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Denim'} onChange={toggleCategory} />Denim
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Velvet'} onChange={toggleCategory} />Velvet
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Satin'} onChange={toggleCategory} />Satin 
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Crepe'} onChange={toggleCategory} />Crepe 
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'valentina'} onChange={toggleCategory} />valentina
              </p>
             
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Rayon'} onChange={toggleCategory} />Rayon 
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Net/Lace'} onChange={toggleCategory} />Net/Lace
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Fleece'} onChange={toggleCategory} />Fleece 
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Batik'} onChange={toggleCategory} />Batik
              </p>
              
               
              
              
              


            </div>

           </div>
            {/*  Subcategory filter */}
            <div className={`border border-b-amber-500 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}> 
            <p className='mb-3 text-sm font-medium '>PATTERN/DESIGN</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-950'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Printed'} onChange={toggleSubCategory}/>Printed
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Striped'} onChange={toggleSubCategory}/>Striped
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Floral'} onChange={toggleSubCategory}/>Floral
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Embroidered'} onChange={toggleSubCategory}/>Embroidered
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Plain / Solid'} onChange={toggleSubCategory}/>Plain / Solid
              </p>
              </div>

              </div>
               {/*  color filter */}
               <div className={`border border-b-amber-500 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}> 
            <p className='mb-3 text-sm font-medium '>MAIN COLOR</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-950'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Black'} onChange={toggleColor}/>Black
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'White'}onChange={toggleColor}/>White
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Red'}onChange={toggleColor}/>Red
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Blue'}onChange={toggleColor}/>Blue
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Pink'}onChange={toggleColor}/>Pink
              </p>
              
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Gold'}onChange={toggleColor}/>Gold
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Gray'}onChange={toggleColor}/>Gray
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Green'}onChange={toggleColor}/>Green
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Cream'}onChange={toggleColor}/>Cream
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Purple'}onChange={toggleColor}/>Purple
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Peach'}onChange={toggleColor}/>Peach
              </p>
              
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Yellow'}onChange={toggleColor}/>Yellow
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Orange'}onChange={toggleColor}/>Orange
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Brown'}onChange={toggleColor}/>Brown
              </p>
              </div>

              </div>
                {/*  width range filter */}
                <div className={`border border-b-amber-500 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}> 
            <p className='mb-3 text-sm font-medium '>WIDTH RANGE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-950'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'36 inches-(91cm)'}onChange={toggleWidth}/>36 inches-(91cm)
              </p> 
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'44 inches-(112cm)'}onChange={toggleWidth}/>44 inches-(112cm)
              </p> 
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'54 inches-(137cm)'}onChange={toggleWidth}/>54 inches-(137cm)
              </p> 
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'58-60 inches-(147-152cm)'}onChange={toggleWidth}/>58-60 inches-(147-145cm)
              </p> 
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'72 inches-(183cm)'}onChange={toggleWidth}/>76 inches-(183cm)
              </p> 
              </div>
           
           </div>
           {/*  availablity filter */}
           <div className={`border border-b-amber-500 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}> 
            <p className='mb-3 text-sm font-medium '>AVAILABLITY</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-950'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'In stock only'}onChange={toggleAvailability}/>In stock only
              </p> 
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Out of stock only'}onChange={toggleAvailability}/>Out of stock only
              </p> 
              </div>
            
           </div> 
           {/* Sale Type Filter */}
             <div className={`border border-b-amber-500 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}> 
             <p className='mb-3 text-sm font-medium'>SALE TYPE</p>
             <div className='flex flex-col gap-2 text-sm font-light text-gray-950'>
              <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Wholesale'} onChange={toggleSaleType}/>Wholesale
              </p> 
             <p className='flex gap-2'>
             <input className='w-3' type="checkbox" value={'Retail'} onChange={toggleSaleType}/>Retail
              </p> 
            </div>
             </div>

           </div>
            {/* right side */}
            <div className='flex-1'>
              <div className='flex justify-between text-base sm:text-2xl mb-4'>
              <Title text1={"ALL"} text2={"Materials"} />
              
               {/* PRODUCT SORT */}
               <select  onChange={(e) => setSortType(e.target.value)}
                className='border-2 border-gray-300 text-sm px-2'>

               <option value="relevant">Sort by: Relevant</option>
               <option value="low-high">Sort by: Low to High</option>
               <option value="high-low">Sort by: High to Low</option>
               

               </select>
            </div>

             {/* MAP PRODUCTS */}
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {
              filterProducts.map((item,index) => (
                <ProductItem key={index} id={item._id} 
                image={item.image} 
                name={item.name} 
                price={item.price} 
                range={item.range}/>
              ))
            }
            
            </div>

            </div>
           
        </div>
    
  );
};

export default Collection;
