import React from 'react'
import Footer from '../Components/Footer'
import { assets } from '../assets/frontend_assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='grid grid-cols-2 max-md:grid-cols-1 mt-10'>
              <img src={assets.contact_img} alt=""  className='mt-10 h-3/4 ml-6 w-3/4 max-sm:w-full max-sm:ml-0'/>
              <div>
                  <div className='max-sm:text-center'>
                    <p className='mt-10 text-[30px] font-[500] inline-block'><span className='text-gray-600 font-normal'>CONTACT</span> US</p>
                    <p className='bg-gray-800 w-12 h-1 self-center inline-block ml-3 mb-2'></p>
                  </div>
                  <div className='ml-10 mt-10'>
                    <p  className='mb-6 font-bold text-[25px] text-gray-600'>Our Store</p>
                    <p  className=' text-[20px] text-gray-600'>54709 Willms Station</p>
                    <p  className='text-[20px] text-gray-600'>Suite 350, Washington, USA</p>
                    <p  className='text-[20px] text-gray-600 mt-6'>Tel: (415) 555-0132</p>
                    <p  className='text-[20px] text-gray-600 '>Email: admin@forever.com</p>
                    <h1 className='mt-6 font-bold text-[25px] text-gray-600'>Careers at Forever</h1>
                    <p  className='text-[20px] text-gray-600 mt-3'>Learn more about our teams and job openings.</p>
                    <button className='p-6 border-2 border-gray-800 hover:text-white hover:bg-black mt-6 transition-all duration-700'>Explore Jobs</button>
                  </div>
              </div>
            </div>



    <div className='ml-auto mr-auto relative text-center mt-40'>
        <h1 className='font-bold text-[35px] '>Subscribe now & get 20% off</h1>
        <p className='text-gray-600 mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      <div className='flex mt-12  border-2 border-gray-100 w-fit mr-auto ml-auto '>
        <input type="email" placeholder='Enter Your Email' className='py-6 2xl:w-[600px] px-3 focus:border-none focus:outline-none'/>
        <button className='text-white bg-black xl:px-12 max-xl:px-3 py-2 font-[500]'>SUBSCRIBE</button>
      </div>

      <Footer />
      <hr className='w-full mt-16' />
      <p className='text-center py-6 text-[20px] font-[600]'>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
    
    </div>
  )
}

export default Contact