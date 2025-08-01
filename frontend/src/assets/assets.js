import logo from './5.png';
import search from './search_icon.png';
import profile from './profile_icon.png';
import cart from './cart.png';
import menu from './menu.png';
import drop from './drop.png'
import hero from './one.jpg';
import handloom1 from './handloom1.jpeg';
import bbrown from './bbrown.jfif'; 
import linen1 from './linen1.jpeg';
import floral from './floral.jpeg';
import redsilky from './redsilky.jpeg'; 
import wool from './wool.jpeg';
import plainsilky from './plainsilky.jpeg';
import valantina from './valantina.jpeg';
import viscos from './viscos.jpeg';
import batik from './batik.jpeg';
import batikblack from './batik-black.jpeg';
import gray1 from './gray1.jpeg'
import gray2 from './gray2.jpeg'
import gray3 from './gray3.jpeg'
import batikblue from './batik-blue.webp';
import batikred from './batik-red.webp';
import cottonyellow from './cotton-yellow.jpeg';
import crepepeach from './crepe-peach.jpeg';
import denimblue from './denim-blue.jpeg';
import cottonpurple from './cotton-purple.jpeg';
import floral1 from './floral1.jpeg';
import linenbrown from './linen-brown.jpeg';
import yellow1 from './yellow1.jfif';
import cream1 from './cream1.jfif';
import cream2 from './cream2.jpg';
import crepe1 from './crepe1.jfif';
import crepe2 from './crepe2.avif';
import denim1 from './denim1.jfif';
import denim2 from './denim2.jpg';
import denim3 from './denim3.jfif';
import velvetred from './velvet-red.webp';
import stripe from './stripe.jpeg';
import woolpink from './wool-pink.webp';
import satinp from './satin-printed.jpeg';
import velvet1 from './printed1-velvet.jpeg';
import whitelace from './white-lace.jpeg';
import rayon1 from './rayon-printed.webp'
import about from './about.webp';
import contact from './contact1.webp';
import cross_icon from './cross_icon.png';
import star_icon from './star_icon.png';
import star_dull_icon from './star_dull_icon.png';
import bin_icon from './bin_icon.png'; 
import stripe_logo from './stripe_logo.png'






export const assets = {
    logo,
    search,
    profile,
    cart,
    menu,
    drop,
    hero,
    about,
    contact,
    cross_icon,
    star_icon,
    star_dull_icon,
    bin_icon,
    stripe_logo
    
}
export const products = [
{
    _id: "aaa",
    name: "Handloom material",
    description:"Handwoven with care, this eco-friendly fabric brings a touch of tradition and authenticity to your wardrobe. Perfect for unique, breathable everyday wear.",
    price:450,
    image:[handloom1],
    category:"Cotton",
    subCategory :"Printed",
    color: 'Orange',
    width: '44 inches-(112cm)',
    inStock: true,
    saleType: "Retail",
    range:["per yard"],
    widthRange :["91cm","112cm","137cm"],
    bestseller:true,
    material: "100% Cotton",
    gsm: "140 GSM",
    care: [
    "Hand wash separately in cold water",
    "Do not wring hard",
    "Dry flat in shade"
  ],
  idealFor: ["Casual Wear", "Office Wear", "Ethnic Outfits"]
   
},
{

    _id: "aab",
    name: "Cotton material",
    description:"Soft, breathable, and gentle on the skin. Ideal for daily comfort, cotton is a must-have for warm weather and relaxed outfits.",
    price:800,
    image:[bbrown],
    category:"Cotton",
    subCategory :"Plain / Solid",
    color: 'Brown',
    width: '44 inches-(112cm)',
    inStock: true,
    saleType: "Wholesale",
    range:["per yard"],
    widthRange :["91cm","112cm","137cm","147cm","183cm"],
    bestseller:false,
    material: "100% Cotton",
    gsm: "120 GSM",
    care: [
    "Machine wash in cold water",
    "Tumble dry low",
    "Warm iron if needed"
  ],
  idealFor: ["Everyday Wear", "Kids Clothing", "Summer Wear"]
},
{

    _id: "aac",
    name: "Linen material",
    description:"Lightweight and airy, linen keeps you cool and stylish. Great for summer days and casual elegance.",
    price:750,
    image:[linen1,gray1,gray2,gray3],
    category:"Linen",
    subCategory :"Plain / Solid",
    color: 'Gray',
    width: '76 inches-(183cm)',
    inStock: true,
    saleType: "Retail",
    range:["per yard"],
    widthRange :["91cm","112cm","137cm","147cm","183cm"],
    bestseller:true,
    material: "100% Linen",
    gsm: "150 GSM",
    care: [
      "Gentle machine wash",
      "Do not bleach",
      "Iron while damp"
    ],
    idealFor: ["Summer Wear", "Formal Wear", "Resort Clothing"]
},
{
 
    _id: "aad",
    name: "Floral material",
    description:"Add a burst of beauty with floral prints. These vibrant, nature-inspired designs are perfect for dresses, tops, and skirts.",
    price:400,
    image:[floral],
    category:"Cotton",
    subCategory :"printed",
    color: 'White',
    width: '44 inches-(112cm)',
    inStock: true,
    saleType: "Wholesale",
    range:["per yard"],
    widthRange :["91cm","112cm","137cm","147cm","183cm"],
    bestseller:true,
    material: "Cotton Blend",
    gsm: "130 GSM",
    care: [
    "Machine wash cold",
    "Do not bleach",
    "Dry in shade"
  ],
  idealFor: ["Party Wear", "Summer Dresses", "Beachwear"]
},
{

    _id: "aae",
    name: "Red Silk material",
    description:"Luxuriously smooth with a natural sheen, silk adds elegance to any outfit. Perfect for evening wear and special occasions.",
    price:650,
    image:[redsilky],
    category:"Silk",
    subCategory :"Plain / Solid",
    color: 'Red',
    width: '44 inches-(112cm)',
    inStock: false,
    saleType: "Retail",
    range:["per yard"],
    widthRange :["91cm","112cm"],
    bestseller:false,
    material: "100% Silk",
    gsm: "70 GSM",
    care: [
    "Dry clean only",
    "Avoid direct sunlight",
    "Iron on low heat"
  ],
  idealFor: ["Wedding Wear", "Evening Gowns", "Luxury Fashion"]
},
{

    _id: "aaf",
    name: "Wool material",
    description:"Stay cozy with natural wool. This insulating fabric is your go-to for warmth and comfort in cold seasons.",
    price:890,
    image:[wool],
    category:"Wool",
    subCategory :"Plain / Solid",
    color: 'Pink',
    width: '44 inches-(112cm)',
    inStock: false,
    saleType: "Retail",
    range:["per yard"],
    widthRange :["91cm","112cm"],
    bestseller:false,
    material: "100% Wool",
    gsm: "250 GSM",
    care: [
    "Dry clean recommended",
    "Do not tumble dry",
    "Store folded"
  ],
  idealFor: ["Winter Clothing", "Suits", "Overcoats"]
},
{

    _id: "aag",
    name: " Plain Silk material",
    description:"Sleek and simple, plain silk offers timeless beauty with a smooth finish. Ideal for both formal and casual chic looks.",
    price:650,
    image:[plainsilky],
    category:" Silk",
    subCategory :"Plain / Solid",
    color: 'Peach',
    width: '44 inches-(112cm)',
    inStock: true,
    saleType: "Wholesale",
    range:["per yard"],
    widthRange :["91cm","112cm","137cm","147cm","183cm"],
    bestseller:false,
    material: "100% Silk",
    gsm: "65 GSM",
    care: [
    "Dry clean only",
    "Steam iron on low",
    "Store carefully to avoid wrinkles"
  ],
  idealFor: ["Sarees", "Blouses", "Luxury Formalwear"]
},
{

    _id: "aah",
    name: "Valentina material",
    description:"Soft, durable, and easy to care for, Valentina fabric blends style and comfort effortlessly. Great for modern, everyday fashion.",
    price:1100,
    image:[valantina],
    category:"valentina",
    subCategory :"Printed",
    color: 'Blue',
    width: '44 inches-(112cm)',
    inStock: false,
    saleType: "Wholesale",
    range:["per yard"],
    widthRange :["91cm","112cm","137cm"],
    bestseller:true,
    material: "Polyester Blend",
    gsm: "90 GSM",
    care: [
    "Machine wash cold",
    "Iron on low heat",
    "Dry flat"
  ],
  idealFor: ["Party Dresses", "Bridesmaid Dresses", "Evening Gowns"]
},
{

    _id: "aai",
    name: "Viscose material",
    description:"Silky-soft and flowy, viscose drapes beautifully. A perfect pick for dresses, tops, and elegant outfits.",
    price:450,
    image:[viscos],
    category:"Viscose",
    subCategory :"Floral",
    color: 'Green',
    width: '44 inches-(112cm)',
    inStock: true,
    saleType: "Retail",
    range:["per yard"],
    widthRange :["91cm","112cm","137cm","147cm","183cm"],
    bestseller:false,
    material: "100% Viscose",
    gsm: "110 GSM",
    care: [
    "Hand wash recommended",
    "Use mild detergent",
    "Dry flat in shade"
  ],
  idealFor: ["Casual Tops", "Dresses", "Office Wear"]
},
{

    _id: "aaj",
    name: "Batik material",
    description:"Rich in color and culture, batik fabrics feature stunning patterns created with traditional dyeing techniques. A standout choice for unique, artistic fashion.",
    price:900,
    image:[batik],
    category:"Batik",
    subCategory :"Printed",
    color: 'Purple',
    width: '44 inches-(112cm)',
    inStock: true,
    saleType: "Retail",
    range:["per yard"],
    widthRange :["91cm","112cm","137cm","147cm"],
    bestseller:true,
    material: "100% Cotton",
    gsm: "120 GSM", 
    care: [
    "Hand wash separately in cold water",
    "Use mild detergent only",
    "Do not bleach",
    "Dry in shade"
  ],
  idealFor: ["Casual Wear", "Party Wear", "Traditional Outfits"]
},
{

  _id: "aak",
  name: "Batik-black material",
  description:"Rich in color and culture, batik fabrics feature stunning patterns created with traditional dyeing techniques. A standout choice for unique, artistic fashion.",
  price:900,
  image:[batikblack],
  category:"Batik",
  subCategory :"Printed",
  color: 'Black',
  width: '44 inches-(112cm)',
  inStock: true,
  saleType: "Retail",
  range:["per yard"],
  widthRange :["91cm","112cm","137cm","147cm"],
  bestseller:true,
  material: "100% Cotton",
  gsm: "120 GSM", 
  care: [
  "Hand wash separately in cold water",
  "Use mild detergent only",
  "Do not bleach",
  "Dry in shade"
],
idealFor: ["Casual Wear", "Party Wear", "Traditional Outfits"]
},
{

  _id: "aal",
  name: "Batik-blue material",
  description:"Rich in color and culture, batik fabrics feature stunning patterns created with traditional dyeing techniques. A standout choice for unique, artistic fashion.",
  price:900,
  image:[batikblue],
  category:"Batik",
  subCategory :"Printed",
  color: 'Blue',
  width: '44 inches-(112cm)',
  inStock: true,
  saleType: "Retail",
  range:["per yard"],
  widthRange :["91cm","112cm","137cm","147cm"],
  bestseller:true,
  material: "100% Cotton",
  gsm: "120 GSM", 
  care: [
  "Hand wash separately in cold water",
  "Use mild detergent only",
  "Do not bleach",
  "Dry in shade"
],
idealFor: ["Casual Wear", "Party Wear", "Traditional Outfits"]
},
{

  _id: "aam",
  name: "Batik-red material",
  description:"Rich in color and culture, batik fabrics feature stunning patterns created with traditional dyeing techniques. A standout choice for unique, artistic fashion.",
  price:900,
  image:[batikred],
  category:"Batik",
  subCategory :"Printed",
  color: 'Red',
  width: '44 inches-(112cm)',
  inStock: true,
  saleType: "Retail",
  range:["per yard"],
  widthRange :["91cm","112cm","137cm","147cm"],
  bestseller:true,
  material: "100% Cotton",
  gsm: "120 GSM", 
  care: [
  "Hand wash separately in cold water",
  "Use mild detergent only",
  "Do not bleach",
  "Dry in shade"
],
idealFor: ["Casual Wear", "Party Wear", "Traditional Outfits"]
},
{

  _id: "aan",
  name: "cotton-yellow material",
  description:"Lightweight and breathable, offering all-day comfort.Bright yellow shade adds a cheerful, fresh look.",
  price:900,
  image:[cottonyellow,yellow1,cream1,cream2],
  category:"Cotton",
  subCategory :"Plain / Solid",
  color: 'Cream',
  width: '36 inches-(91cm)',
  inStock: true,
  saleType: "Retail",
  range:["per yard"],
  widthRange :["91cm","112cm","137cm","147cm"],
  bestseller:true,
  material: "100% Cotton",
  gsm: "120 GSM", 
  care: [
  "Hand wash separately in cold water",
  "Use mild detergent only",
  "Do not bleach",
  "Dry in shade"
],
idealFor: ["Casual Wear", "Party Wear", "Traditional Outfits"]
},
{

  _id: "aao",
  name: "Crepe-peach material ",
  description:"Silky with a soft crinkled texture and elegant drape.Peach tone brings a soft, graceful touch to any outfit.",
  price:850,
  image:[crepepeach,crepe1,crepe2],
  category:"Crepe",
  subCategory :"Plain / Solid",
  color: 'Peach',
  width: '44 inches-(112cm)',
  inStock: false,
  saleType: "Retail",
  range:["per yard"],
  widthRange :["91cm","112cm","137cm","147cm"],
  bestseller:true,
  material: "100% Cotton",
  gsm: "120 GSM", 
  care: [
  "Hand wash separately in cold water",
  "Use mild detergent only",
  "Do not bleach",
  "Dry in shade"
],
idealFor: ["Casual Wear", "Party Wear", "Traditional Outfits"]
},
{

  _id: "aap",
  name: "Denim-blue material",
  description:"Strong and durable with a classic textured feel.Deep blue shade offers timeless, rugged style.",
  price:1800,
  image:[denimblue,denim1,denim2,denim3],
  category:"Denim",
  subCategory :"Printed",
  color: 'Blue',
  width: '44 inches-(112cm)',
  inStock: true,
  saleType: "Wholesale",
  range:["per yard"],
  widthRange :["91cm","112cm","137cm","147cm"],
  bestseller:true,
  material: "100% Denim",
  gsm: "120 GSM", 
  care: [
  "Hand wash separately in cold water",
  "Use mild detergent only",
  "Do not bleach",
  "Dry in shade"
],
idealFor: ["Casual Wear", "Party Wear", "Traditional Outfits"]
},
{

  _id: "aaq",
  name: "Cotton-purple material",
  description:"Soft to the touch and highly breathable for daily wear.Rich purple color gives a bold yet cozy vibe.",
  price:900,
  image:[cottonpurple],
  category:"Cotton",
  subCategory :"Plain / Solid",
  color: 'Purple',
  width: '44 inches-(112cm)',
  inStock: false,
  saleType: "Retail",
  range:["per yard"],
  widthRange :["91cm","112cm","137cm","147cm"],
  bestseller:true,
  material: "100% Cotton",
  gsm: "120 GSM", 
  care: [
  "Hand wash separately in cold water",
  "Use mild detergent only",
  "Do not bleach",
  "Dry in shade"
],
idealFor: ["Casual Wear", "Party Wear", "Traditional Outfits"]
},
{

  _id: "aar",
  name: "Floral material",
  description:"Luxurious, smooth, and lightweight with a glossy finish.Vibrant floral designs add elegance and charm.",
  price:900,
  image:[floral1],
  category:"Silk",
  subCategory :"Floral",
  color: 'Pink',
  width: '44 inches-(112cm)',
  inStock: true,
  saleType: "Wholesale",
  range:["per yard"],
  widthRange :["91cm","112cm","137cm","147cm"],
  bestseller:false,
  material: "100% Silk",
  gsm: "150 GSM", 
  care: [
  "Hand wash separately in cold water",
  "Use mild detergent only",
  "Do not bleach",
  "Dry in shade"
],
idealFor: ["Casual Wear", "Party Wear", "Traditional Outfits"]
},
{

  _id: "aas",
  name: "Linen-brown  material",
  description:"Naturally textured, airy, and perfect for warm days.The brown hue gives a rustic and earthy appeal.",
  price:900,
  image:[linenbrown],
  category:"Linen",
  subCategory :"Plain / Solid",
  color: 'Brown',
  width: '44 inches-(112cm)',
  inStock: true,
  saleType: "Wholesale",
  range:["per yard"],
  widthRange :["91cm","112cm","137cm","147cm"],
  bestseller:false,
  material: "100% Linen",
  gsm: "120 GSM", 
  care: [
  "Hand wash separately in cold water",
  "Use mild detergent only",
  "Do not bleach",
  "Dry in shade"
],
idealFor: ["Casual Wear", "Party Wear", "Traditional Outfits"]
},
{
  _id: "aat",
  name: "Velvet-red  material",
  description:"Naturally textured, airy, and perfect for warm days.Plush, soft-touch fabric with a rich luxurious finish.Deep red adds elegance and warmth to any design.",
  price:900,
  image:[velvetred],
  category:"Velvet",
  subCategory :"Plain / Solid",
  color: 'Red',
  width: '44 inches-(112cm)',
  inStock: true,
  saleType: "Retail",
  range:["per yard"],
  widthRange :["91cm","112cm","137cm"],
  bestseller:false,
  material: "100% Velvet",
  gsm: "120 GSM", 
  care: [
   "Dry clean recommended",
   "avoid ironing directly"
],
idealFor: ["Evening gowns", "party wear", "upholstery"]
},
{
    _id: "aau",
  name: "Stripe Material",
  description:"Smooth and stylish with clean, linear patterns.Adds a modern, structured look to outfits or décor.",
  price:850,
  image:[stripe],
  category:"Cotton",
  subCategory :"Striped",
  color: 'White',
  width: '44 inches-(112cm)',
  inStock: true,
  saleType: "Retail",
  range:["per yard"],
  widthRange :["91cm","112cm","137cm","147cm"],
  bestseller:false,
  material: "100% Cotton",
  gsm: "120 GSM", 
  care: [
   "Dry clean recommended",
   "Machine wash cold",
   "tumble dry low or hang dry",
   "avoid ironing directly"
],
idealFor: ["Evening gowns", "Shirts", "casual wear", "home décor accents"]
},
{
    _id: "aav",
  name: "Wool-pink Material",
  description:"Smooth and stylish with clean,Warm, dense, and naturally insulating fabric.Ideal for cozy winter wear and layered looks.",
  price:2500,
  image:[woolpink],
  category:"Wool",
  subCategory :"Plain / Solid",
  color: 'Pink',
  width: '44 inches-(112cm)',
  inStock: true,
  saleType: "Retail",
  range:["per yard"],
  widthRange :["91cm","112cm"],
  bestseller:false,
  material: "100% Wool",
  gsm: "200 GSM", 
  care: [
   "Dry clean recommended",
   "Machine wash cold",
   "lay flat to dry"
],
idealFor: ["Winter coats", "sweaters", "scarves", "suits"]
},
{
     _id: "aaw",
  name: "Satin-Printed Material",
  description:"Smooth and stylish with clean,Warm, dense, and naturally insulating fabric.Ideal for cozy winter wear and layered looks.",
  price:850,
  image:[satinp],
  category:"Satin",
  subCategory :"Printed",
  color: 'Pink',
  width: '44 inches-(112cm)',
  inStock: true,
  saleType: "Retail",
  range:["per yard"],
  widthRange :["91cm","112cm"],
  bestseller:false,
  material: "100% Satin",
  gsm: "150 GSM", 
  care: [
   "Dry clean recommended",
   "Machine wash cold",
   "lay flat to dry",
   "Hand wash or gentle cycle in cold water",
   "iron on low heat inside out"
],
idealFor: ["Winter coats", "sweaters", "scarves", "suits"]
},
{
     _id: "aax",
  name: "Velvet Material",
  description:"Plush, soft-touch fabric with a rich luxurious finish.Deep gold adds elegance and warmth to any design.",
  price:1500,
  image:[velvet1],
  category:"Velvet",
  subCategory :"Floral",
  color: 'Gold',
  width: '44 inches-(112cm)',
  inStock: true,
  saleType: "Retail",
  range:["per yard"],
  widthRange :["91cm","112cm"],
  bestseller:true,
  material: "100% Velvet",
  gsm: "200 GSM", 
  care: [
   "Dry clean recommended",
   "Machine wash cold",
   "lay flat to dry",
   "avoid ironing directly"
],
idealFor: ["Evening gowns", "party wear", "upholstery"]
},
{
     _id: "aay",
  name: "White-lace Material",
  description:"Smooth and stylish with clean,Warm, dense, and Delicate, sheer, and beautifully patterned.Adds a romantic and vintage charm to garments.naturally insulating fabric.",
  price:2500,
  image:[whitelace],
  category:"Net/Lace",
  subCategory :"Embroidered",
  color: 'White',
  width: '36 inches-(91cm)',
  inStock: true,
  saleType: "Retail",
  range:["per yard"],
  widthRange :["91cm","112cm"],
  bestseller:false,
  material: "100% Lace",
  gsm: "180 GSM", 
  care: [
   "Dry clean recommended",
   "Machine wash cold",
   "air dry flat",
   "Hand wash only in cold water"
],
idealFor: ["Bridal wear", "blouses", "overlays", "home decor"]
},
{
     _id: "aaz",
  name: "Rayon Material",
  description:"Smooth and stylish with clean,Warm, dense, Smooth and breathable with a silk-like touch.Drapes well and offers a soft, flowing appearance.",
  price:2100,
  image:[rayon1],
  category:"Rayon",
  subCategory :"Printed",
  color: 'Pink',
  width: '44 inches-(112cm)',
  inStock: true,
  saleType: "Retail",
  range:["per yard"],
  widthRange :["91cm","112cm"],
  bestseller:false,
  material: "100% Rayon",
  gsm: "150 GSM", 
  care: [ 
   "Hand wash or gentle cycle",
   "Machine wash cold",
   "lay flat to dry",
   "iron on low while slightly damp."
],
idealFor: ["Casual wear", "dresses", "summer tops", "flowy pants."]
}


]

