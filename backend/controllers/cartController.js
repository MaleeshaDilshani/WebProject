import userModel from "../models/userModel.js"

 

 // add products to user cart
 const addToCart = async (req,res) => {
   
    try {
        const {userId , itemId, selectedWidth} = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        if (cartData[itemId]) {
            if (cartData[itemId][selectedWidth]) {
                cartData[itemId][selectedWidth] += 1
            }
            else {
                cartData[itemId][selectedWidth] = 1
            }
            
        }else{
            cartData[itemId] = {}
            cartData[selectedWidth] = {}
        }

        await userModel.findByIdAndUpdate(userId,{cartData}) 

        res.json({success: true, message:"Added To Cart"})
    } catch (error) {
        console.log(error);
        res.json({success: true, message: error.message})
        
    }
 }
  // update products to user cart
 const updateCart = async (req,res) => {


    try {
        const {userId, itemId, selectedWidth,quantity} = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;
        cartData[itemId][selectedWidth] = quantity
        await userModel.findByIdAndUpdate(userId,{cartData}) 

        res.json({success: true, message:"Cart Updated"})

    } catch (error) {
        console.log(error);
        res.json({success: true, message: error.message})
    }

 }
  // get  user cart data
 const getUserCart = async (req,res) => {
      try {
        const{userId} = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;
        res.json({success: true, cartData})

      } catch (error) {
        console.log(error);
        res.json({success: true, message: error.message})
      }
 }


 export { addToCart, updateCart, getUserCart }