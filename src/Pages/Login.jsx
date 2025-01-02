import React, { useState } from 'react'
import Footer from '../Components/Footer'

const Login = () => {
  // const [sign ,setSign] = useState(false)
  const [login ,setlogin] = useState(true)

  return (
    <div>

          <div className='text-center mt-40'>
            <p className=' text-[30px] font-[400] font-serif inline-block'> {login ? 'Login' : 'Sign Up'}</p>
            <p className='bg-gray-800 w-12 h-1 self-center inline-block ml-3 mb-2'></p>
          </div>

          <div className='flex flex-col justify-center items-center mt-6'>
           {
             login? <>
                <div className='flex flex-col justify-center items-center mt-6'>
                <input type="email" name="" id=""    placeholder='Email' className='px-2 focus:border-none focus:outline-none mb-5 border-2 border-gray-700 text-gray-300 py-3 w-[400px] max-sm:w-[300px]'/>
                <input type="password" name="" id="" placeholder='Password' className='px-2 focus:border-none focus:outline-none border-2 border-gray-700 text-gray-300 py-3 w-[400px] max-sm:w-[300px]'/>
                </div>
             </>:<>
              <div className='flex flex-col justify-center items-center mt-6'>
                <input type="text" name="" id=""    placeholder='Name' className='px-2 focus:border-none focus:outline-none mb-5 border-2 border-gray-700 text-gray-300 py-3 w-[400px] max-sm:w-[300px]'/>
                <input type="email" name="" id=""    placeholder='Email' className='px-2 focus:border-none focus:outline-none mb-5 border-2 border-gray-700 text-gray-300 py-3 w-[400px] max-sm:w-[300px]'/>
                <input type="password" name="" id="" placeholder='Password' className='px-2 focus:border-none focus:outline-none border-2 border-gray-700 text-gray-300 py-3 w-[400px] max-sm:w-[300px]'/>
              </div>
             </>
           }

              
              <div className='flex justify-between gap-32 mt-2 font-[500] max-sm:ml-4'>
                <p className=''>Forgot your password?</p>
                <p onClick={()=>{setlogin(!login)}} className='cursor-pointer' >{ login?'Create account':'Login Here'}</p>
              </div>
              <button className='py-3 px-10 mt-5 border-2 border-gray-700 transition-all duration-700 hover:bg-black hover:text-white'>Sign in</button>
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

export default Login