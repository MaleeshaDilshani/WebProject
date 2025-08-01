import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
 
  const currency = 'Rs';
  const delivery_fee = 300;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');
  const navigate = useNavigate();





  const addToCart = async (itemId, selectedWidth) => {

     if (!selectedWidth) {
      toast.error("Select product width range!");
      return;
    }

    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][selectedWidth]) {
        cartData[itemId][selectedWidth] += 1;
      }
      else {
        cartData[itemId][selectedWidth] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][selectedWidth] = 1;
    }
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/add', {itemId,selectedWidth}, {headers:{token}})
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }
    }

  }


  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (e) { }

      }

    }
    return totalCount;
  }





  const updateQuantity = async (itemId, selectedWidth, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][selectedWidth] = quantity;
    setCartItems(cartData);
    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/update', {itemId,selectedWidth,quantity}, {headers:{token}})

      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    }

  }


  const getCartAmount =  () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);

      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {

         }
      }
    }

    return totalAmount;
  }

  const getProductsData = async () => {
    try {
      const response = await axios.get((`${import.meta.env.VITE_BACKEND_URL}/api/product/list`)
)
      if(response.data.success){
        setProducts(response.data.products)

      }else{
        toast.error(response.data.message)

      }

    } catch (error) {
      console.error(error);
      toast.error(error.message);

    }
  } 

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(backendUrl + '/api/cart/get', {},{headers:{token}})
      if (response.data.success) {
        setCartItems(response.data.cartData)
      }
    } catch (error) {

      
    }
  }

  useEffect(() => {
    getProductsData();
  }, []);

 useEffect (()=> {
  if(!token && localStorage.getItem('token')){
    setToken(localStorage.getItem('token'))
    getUserCart(localStorage.getItem('token'))
  } 
 },[])






  const value = {
    products, currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch,
    cartItems, addToCart, setCartItems, getCartCount,
    updateQuantity, getCartAmount, navigate, backendUrl,
    setToken,token

  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )


}
export default ShopContextProvider;
