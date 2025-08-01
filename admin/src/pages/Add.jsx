import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Linen');
  const [subCategory, setSubCategory] = useState('Plain / Solid');
  const [color, setColor] = useState('');
  const [width, setWidth] = useState('');
  const [availability, setAvailability] = useState('');
  const [saleType, setSaleType] = useState('');
  const [selectedWidth, setSelectedWidth] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [material, setMaterial] = useState('');
  const [gsm, setGsm] = useState('');
  const [idealFor, setIdealFor] = useState('');
  const [care, setCare] = useState('');


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('color', color);
   formData.append('widthRange', JSON.stringify(selectedWidth)); 

formData.append('width', parseFloat(width));


      formData.append('saleType', saleType);
      formData.append('inStock', availability === 'In stock only');
   
      formData.append('material', material);
      formData.append('gsm', gsm);
      formData.append('idealFor', idealFor);
      formData.append('care', care);

      formData.append('bestseller', bestseller);

      if (image1) formData.append('image1', image1);
      if (image2) formData.append('image2', image2);
      if (image3) formData.append('image3', image3);
      if (image4) formData.append('image4', image4);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const toggleWidth = (value) => {
    setSelectedWidth((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      {/* Upload Image */}
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          {[image1, image2, image3, image4].map((img, index) => (
            <label key={index} htmlFor={`image${index + 1}`}>
              <img className="w-20" src={!img ? assets.upload_area : URL.createObjectURL(img)} alt="" />
              <input
                onChange={(e) => {
                  const setImage = [setImage1, setImage2, setImage3, setImage4][index];
                  setImage(e.target.files[0]);
                }}
                type="file"
                id={`image${index + 1}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Name */}
      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      {/* Product Description */}
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Write content here"
          required
        />
      </div>

      {/* Selections */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        {/* Category */}
        <div>
          <p className="mb-2">Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} value={category} className="w-full px-3 py-2">
            {['Linen', 'Cotton', 'Wool', 'Silk', 'Viscose', 'Denim', 'Velvet', 'valentina', 'Batik','Denim','Satin','Net/Lace','Rayon'].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Subcategory */}
        <div>
          <p className="mb-2">Pattern/Design</p>
          <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className="w-full px-3 py-2">
            {['Printed', 'Striped', 'Floral', 'Embroidered', 'Plain / Solid'].map((pat) => (
              <option key={pat} value={pat}>{pat}</option>
            ))}
          </select>

          {/* Color */}
          <p className="mb-2 mt-4">Main Colors</p>
          <select onChange={(e) => setColor(e.target.value)} value={color} className="w-full px-3 py-2">
            {['Black', 'White', 'Red', 'Blue', 'Pink', 'Orange', 'Brown','Gray','Peach','Green','Purple','Cream','Gold'].map((clr) => (
              <option key={clr} value={clr}>{clr}</option>
            ))}
          </select>
        </div>

        {/* Width */}
        <div>
          <p className="mb-2">Width Range</p>
          <select onChange={(e) => setWidth(e.target.value)} value={width} className="w-full px-3 py-2">
            {[
              '36 inches-(91cm)',
              '44 inches-(112cm)',
              '54 inches-(137cm)',
              '58-60 inches-(147-145cm)',
              '76 inches-(183cm)',
            ].map((w) => (
              <option key={w} value={w}>{w}</option>
            ))}
          </select>
        </div>

        {/* Availability */}
        <div>
          <p className="mb-2">Availability</p>
          <select onChange={(e) => setAvailability(e.target.value)} value={availability} className="w-full px-3 py-2">
            <option value="In stock only">In stock only</option>
            <option value="Out of stock only">Out of stock only</option>
          </select>
        </div>

        {/* Sale Type */}
        <div>
          <p className="mb-2">Sale Type</p>
          <select onChange={(e) => setSaleType(e.target.value)} value={saleType} className="w-full px-3 py-2">
            <option value="Wholesale">Wholesale</option>
            <option value="Retail">Retail</option>
          </select>
        </div>
      </div>

      {/* Product Price */}
      <div>
        <p>Product Price</p>
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className="w-full px-3 py-2 sm:w-[120px]"
          type="number"
          placeholder="25"
        />
      </div>

      {/* Selectable Widths */}
      <div>
        <p className="mb-2">Product Width Range</p>
        <div className="flex gap-3 flex-wrap">
          {['91cm', '112cm', '137cm', '147cm', '183cm'].map((w) => (
            <div key={w} onClick={() => toggleWidth(w)}>
              <p className={`${selectedWidth.includes(w) ? 'bg-black text-white' : 'bg-yellow-200'} px-3 py-1 cursor-pointer`}>
                {w}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller */}
      <div className="flex gap-2 mt-2">
        <input onChange={() => setBestseller((prev) => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
        <label className="cursor-pointer" htmlFor="bestseller">Add to bestseller</label>
      </div>
      {/* Material */}
      <div className="w-full">
        <p className="mb-2">Material</p>
        <input
          onChange={(e) => setMaterial(e.target.value)}
          value={material}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="e.g., Cotton Blend"
          required
        />
      </div>

      {/* GSM */}
      <div className="w-full">
        <p className="mb-2">GSM (Grams per Square Meter)</p>
        <input
          onChange={(e) => setGsm(e.target.value)}
          value={gsm}
          className="w-full max-w-[500px] px-3 py-2"
          type="number"
          placeholder="e.g., 180"
          required
        />
      </div>

      {/* Ideal For */}
      <div className="w-full">
        <p className="mb-2">Ideal For</p>
        <input
          onChange={(e) => setIdealFor(e.target.value)}
          value={idealFor}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="e.g., Shirts, Dresses"
          required
        />
      </div>

      {/* Care Instructions */}
      <div className="w-full">
        <p className="mb-2">Care Instructions</p>
        <input
          onChange={(e) => setCare(e.target.value)}
          value={care}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="e.g., Machine wash cold"
          required
        />
      </div>


      {/* Submit Button */}
      <button className="w-28 py-3 mt-4 bg-amber-300 text-black" type="submit">Add</button>
    </form>
  );
};

export default Add;