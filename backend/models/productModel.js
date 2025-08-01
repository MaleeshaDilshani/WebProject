import mongoose from "mongoose";

const prdouctSchema = new mongoose.Schema({
   name: { type: String, required: true },
   description: { type: String, required: true },
   price: { type: Number, required: true },
   image: { type: Array, required: true },
   category: { type: String, required: true },
   subCategory: { type: String, required: true },
   bestseller: { type: Boolean },
   color: { type: String, required: true },
   // productSchema.js
   width: { type: Number, required: true },

   widthRange: { type: [String], required: true },
   inStock: { type: Boolean, required: true },
   saleType: { type: String, required: true }, // e.g., "wholesale", "retail"
   material: { type: String, required: true },
   gsm: { type: Number, required: true },
   idealFor: { type: String, required: true }, // e.g., "shirts", "pants"
   care: { type: String, required: true } // e.g., "machine wash", "dry clean"
})
const productModel = mongoose.models.product || mongoose.model("product", prdouctSchema);

export default productModel    