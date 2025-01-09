import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
import Latestcollection from '../Components/Latestcollection'
import BestSallers from '../Components/BestSallers'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='mt-10 '>
      <div className='border-2 border-gray-500 grid grid-cols-2 max-lg:grid-cols-1' >
        <div className='flex flex-col justify-center items-center max-lg:py-10 '>
            <div className='flex mr-16'>
              <p className='font-[800]  translate-y-[-6px] mr-1 '> _____</p>
              <p className=' w-fit myfont2'> OUR BESTSELLERS </p>
            </div>
            <p className=' w-fit text-[35px] myfont'> Latest Arrivals </p>          
            <div className='flex  mr-28'>
              <p className=' w-fit myfont2 '>SHOP NOW</p>
              <p className='translate-y-[-6px] ml-1 '> _____</p>
            </div>
        </div>
        <img src={assets.hero_img} alt="" className=' w-full h-auto '/>
      </div>
      <Latestcollection />
      <BestSallers />
      <div className='flex 2xl:gap-52 bg-white justify-center mt-20 max-sm:flex-col max-sm:gap-10'>
        <div className=''>
          <img src={assets.exchange_icon} alt="" className='ml-auto mr-auto mb-10 size-20'/>
          <h1 className='text-center font-bold text-[25px]'>Easy Exchange Policy</h1>
          <p className='text-center text-gray-500 text-[20px] mt-2'>We offer hassle free exchange policy</p>
        </div>
        <div className=''>
          <img src={assets.quality_icon} alt="" className='ml-auto mr-auto mb-10 size-20'/>
          <h1 className='text-center font-bold text-[25px]'>Easy Exchange Policy</h1>
          <p className='text-center text-gray-500 text-[20px] mt-2'>We offer hassle free exchange policy</p>
        </div>
        <div className=''>
          <img src={assets.support_img} alt="" className='ml-auto mr-auto mb-10 size-20'/>
          <h1 className='text-center font-bold text-[25px]'>Easy Exchange Policy</h1>
          <p className='text-center text-gray-500 text-[20px] mt-2'>We offer hassle free exchange policy</p>
        </div>
      </div>

      <div className='ml-auto mr-auto relative text-center mt-40'>
        <h1 className='font-bold text-[35px] '>Subscribe now & get 20% off</h1>
        <p className='text-gray-600 mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className='flex mt-12  border-2 border-gray-100 w-fit mr-auto ml-auto '>
        <input type="email" placeholder='Enter Your Email' className='text-[15px] py-6 2xl:w-[600px] px-3 focus:border-none focus:outline-none'/>
        <button className='text-white bg-black xl:px-12 max-xl:px-1 py-2 font-[500]'>SUBSCRIBE</button>
      </div>

      <Footer />
      <hr className='w-full mt-16' />
      <p className='text-center py-6 text-[20px] font-[600]'>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
    </div>
  )
}

export default Home

