import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
const Footer = () => {
  return (
   <div className='flex justify-between mt-48 ml-auto mr-auto flex-wrap max-xl:gap-y-7'>
        <div>
            <img src={assets.logo} alt="" className='mb-6 max-sm:ml-auto max-sm:mr-auto' />
            <p className=' text-gray-500 text-[20px]  text-justify px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat architecto praesentium et assumenda quia necessitatibus possimus nemo dolores explicabo omnis consequuntur, distinctio perspiciatis ad laborum eveniet similique officiis veniam nesciunt?</p>
        </div>
        <div>
            <h1 className='font-[600] text-[30px] mb-6'>COMPANY</h1>
            <p className='text-gray-500 text-[20px]'> Home</p>
            <p className='text-gray-500 text-[20px]'> About us</p>
            <p className='text-gray-500 text-[20px]'> Delivery</p>
            <p className='text-gray-500 text-[20px]'> Privacy policy</p>
        </div>
        <div>
            <h1 className='font-[600] text-[30px] mb-6'>GET IN TOUCH</h1>
            <p className='text-gray-500 text-[20px]'>+1-000-000-0000</p>
            <p className='text-gray-500 text-[20px]'>greatstackdev@gmail.com</p>
            <p className='text-gray-500 text-[20px]'> Instagram</p>
        </div>   
   </div>
  )
}

export default Footer