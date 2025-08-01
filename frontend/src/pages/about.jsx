import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
const About = ()=>{
    return(

        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={'US'}/>
 
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about} alt=""/>
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-emerald-900'>
                <p>At Fabric Mart, we specialize in providing premium quality clothing materials to meet the needs of designers, tailors, and fashion lovers.
                     Established in 2018, our shop has become a trusted name in the industry for offering a diverse range of fabrics including cotton, linen, 
                     silk, denim, and more. </p>
                <p>With over 5 years of experience in the fabric industry, Fabric Mart is committed to delivering not only top-quality products 
                    but also a friendly and helpful customer experience.
                    Visit our store or explore our online platform to discover inspiration, style, and quality all in one place.</p>
                    <b className='text-black'>Our Mission</b>
                    <p>At Fabric Mart, our mission is to provide high-quality, 
                        affordable fabrics while inspiring creativity and supporting every customer's design journey.</p>

                </div>

            </div>
            <div className='text-xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'}/>
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
                    <b>High-Quality Fabrics</b>
                    <p>We offer premium materials that are durable, comfortable, and stylish.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
                    <b>Affordable Prices</b>
                    <p>Get the best value without compromising on quality.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
                    <b>Wide Selection</b>
                    <p>A diverse range of fabrics in different textures, colors, and patterns.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
                    <b>Trusted Experience</b>
                    <p>Over 5 years in the industry serving designers and creators.</p>
                </div>
                


            </div>
           
        </div>
    )
}
export default About