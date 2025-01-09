import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div className='mt-10'>
      <div className='grid grid-cols-2 max-md:grid-cols-1'>
        <img src={assets.about_img} alt=""  className='mt-10 h-3/4 ml-6 w-3/4'/>
        <div>
            <div className='text-center'>
              <p className='mt-10 text-[30px] font-[500] inline-block'><span className='text-gray-600 font-normal'>ABOUT</span> US</p>
              <p className='bg-gray-800 w-12 h-1 self-center inline-block ml-3 mb-2'></p>
            </div>
            <div className='ml-10 mt-10'>
              <p  className='mb-6 text-[20px] text-gray-600'>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
              <p  className='mb-6 text-[20px] text-gray-600'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
              <h1 className='mb-6 font-bold text-[20px]'>Our Mission</h1>
              <p  className='text-[20px] text-gray-600'>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
            </div>
        </div>
      </div>

      <div >
          <div className='max-sm:mt-10 max-sm:text-center'>
            <p className=' text-[30px] font-[500] inline-block'><span className='text-gray-600 font-normal'>WHY </span> CHOOSE US</p>
            <p className='bg-gray-800 w-12 h-1 self-center inline-block ml-3 mb-2'></p>
          </div>
      </div>
      <div className='border-2 border-gray-100 flex mt-10 max-sm:flex-col max-sm:gap-4 '>
        <div className='border-2 border-gray-100 p-28 max-sm:p-3 '>
          <h1 className='font-bold'>Quality Assurance:</h1>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border-2 border-gray-100 p-28 max-sm:p-3'>
          <h1 className='font-bold'>Quality Assurance:</h1>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border-2 border-gray-100 p-28 max-sm:p-3'>
          <h1 className='font-bold'>Quality Assurance:</h1>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
      </div>

      <div className='ml-auto mr-auto relative text-center mt-40'>
        <h1 className='font-bold text-[35px] '>Subscribe now & get 20% off</h1>
        <p className='text-gray-600 mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      <div className='flex mt-12  border-2 border-gray-100 w-fit mr-auto ml-auto '>
        <input type="email" placeholder='Enter Your Email' className=' max-sm:text-[12px] py-6 2xl:w-[600px] px-3 focus:border-none focus:outline-none'/>
        <button className='text-white bg-black xl:px-12 max-xl:px-3 py-2 font-[500]'>SUBSCRIBE</button>
      </div>

      <Footer />
      <hr className='w-full mt-16' />
      <p className='text-center py-6 text-[20px] font-[600]'>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
    
    </div>
  )
}

export default About