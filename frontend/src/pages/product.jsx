import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';





const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [selectedWidth, setSelectedWidth] = useState("");
  const [length, setLength] = useState(1);

  ; 




  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);

        return null;
      }
    })

  }


  useEffect(() => {
    fetchProductData();
  }, [productId]);

  const handleLengthChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0.5) {
      setLength(value);
    }
  };


  const totalPrice = productData ? (productData.price * length).toFixed(2) : 0;








  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* PRODUCT DATA */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* PRODUCT IMAGES */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-ful'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)}
                  src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />

              ))
            }

          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />

          </div>

        </div>
        {/* PRODUCT INFO */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl my-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_dull_icon} alt="" className='w-3 5' />


          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          {/* SELECT WIDTH */}
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Width Range</p>
            <div className='flex gap-2'>
              {productData.widthRange.map((item, index) => (
                <button className={`border py-2 px-4 bg-gray-100 ${selectedWidth === item ? 'border-black' : ''}`} key={index}
                  onClick={() => setSelectedWidth(item)}>{item}

                </button>
              ))}

            </div>

          </div>
          {/* SELECT LENGTH */}
          <div className='flex flex-col gap-4 mb-8'>
            <label htmlFor="length"><strong>Select Length (meters):</strong></label>
            <input
              type="number"
              id="length"
              value={length}
              min="0.5"
              step="0.5"
              onChange={handleLengthChange}
              className='border px-4 py-2 w-32'
            />
          </div>
          {/* SHOW TOTAL PRICE */}
          <div className='flex flex-col gap-2'>
            <p><strong>Selected Width:</strong> {selectedWidth}</p>
            <p><strong>Selected Length:</strong> {length} meters</p>
            <p className="text-2xl font-semibold mt-2"><strong>Total Price:</strong> {currency}{totalPrice}</p>
          </div>

          <button className='mt-5 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700'
            onClick={() => addToCart(productData._id, selectedWidth, length)}
          >Add to Cart
          </button>




 

        </div>





      </div>
      {/* DESCRIPTION  SECTION */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm '>Description</b>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-950 bg-amber-100'>
          <p><strong>Fabric:</strong> {productData.name}</p>
          {productData.material && (
            <p><strong>Material:</strong> {productData.material}</p>
          )}
          {productData.widthRange && (
            <p><strong>Available Widths:</strong> {productData.widthRange.join(', ')}</p>
          )}
          <p><strong>Length:</strong> Customizable (Select as per requirement)</p>

          {productData.gsm && (
            <p><strong>Weight:</strong> {productData.gsm}</p>
          )}
          {productData.care && (
            <div>
              <p><strong>Care Instructions:</strong></p>
              <ul className="list-disc ml-5">
                {(Array.isArray(productData.care)
        ? productData.care
        : typeof productData.care === 'string'
          ? productData.care.split(',').map(item => item.trim())
          : []
      ).map((item, index) => (
        <li key={index}>{item}</li>
      ))}
              </ul>
            </div>
          )}
          {productData.idealFor && (
            <p><strong>Ideal For:</strong> {
    Array.isArray(productData.idealFor)
      ? productData.idealFor.join(', ')
      : typeof productData.idealFor === 'string'
        ? productData.idealFor
        : ''
  } </p>
          )}
          <hr className="mt-4" />

          <div className="text-red-800 flex flex-col gap-1 mt-3">
            <p>✅ 100% Original Product</p>
            <p>🚚 Cash on Delivery available</p>
            <p>🔁 Please note: This material is non-returnable once purchased.</p>
          </div>

        </div>

        {/* DISPLAY RELATED PRODUCTS */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />




      </div>




    </div>


  ) : <div className="opacity-0"></div>

}

export default Product

