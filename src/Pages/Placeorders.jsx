import React, { useContext, useState } from 'react'
import Footer from '../Components/Footer'
import { Shopcontext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'

const Placeorders = () => {
  const [pay ,setPay] = useState(false)

  const {cartnumber ,updatecartdata ,getTotalamount} = useContext(Shopcontext)

  return (
    <>
     <div className='grid grid-cols-2 max-lg:grid-cols-1'>
            <div className='mt-12'>
                  <div className=''>
                    <p className=' text-[30px] font-[500] inline-block'><span className='text-gray-600 font-normal'>DELIVERY </span> INFORMATION</p>
                    <p className='bg-gray-800 w-12 h-1 self-center inline-block ml-3 mb-2'></p>
                  </div>
                  <form action="" className='mt-6 flex flex-col '  >
                    <div className='flex  max-sm:flex-col max-sm:gap-3 w-full'>
                      <input type="text" placeholder='First Name' className='px-3 border-2 rounded-md py-2 xl:mr-2 w-full'  required/>
                      <input type="text" placeholder='Last Name'  className='px-3 border-2 rounded-md py-2 w-full' required/>
                    </div>
                    <input type="email" placeholder='Email address'  className='mt-5 px-3 border-2 rounded-md py-2 ' required/>
                    <input type="text" placeholder='Street'  className='mt-5 px-3 border-2 rounded-md py-2 ' required/>
                    <div className='mt-5 flex w-full max-sm:flex-col max-sm:gap-3'>
                      <input type="text" placeholder='City' className='px-3 border-2 rounded-md py-2 mr-2 w-full '  required/>
                      <input type="text" placeholder='State'  className='px-3 border-2 rounded-md py-2 w-full' required/>
                    </div>
                    <div className='mt-5 flex w-full max-sm:flex-col max-sm:gap-3'>
                      <input type="text" placeholder='Zipcode' className='px-3 border-2 rounded-md py-2 mr-2 w-full' required />
                      <input type="text" placeholder='Country'  className='px-3 border-2 rounded-md py-2 w-full ' required/>
                    </div>
                    <input type="tel" placeholder='Phone'  className='mt-5 px-3 border-2 rounded-md py-2' required/>
                  </form>
            </div>


            <div className='flex justify-end w-full xl:mt-96 max-lg:justify-center max-xl:mt-10'>
              <div className=''>
                  <div className=''>
                    <p className=' text-[30px] font-[500] inline-block'><span className='text-gray-600 font-normal'>YOUR </span> CART</p>
                    <p className='bg-gray-800 w-12 h-1 self-center inline-block ml-3 mb-2'></p>
                  </div>
                  <div className='flex flex-col mt-5 w-full'>
                    <div className='flex justify-between border-b-2 border-gray-800 py-3'>
                      <p>Subtotal</p>
                      <p>$ {getTotalamount()}.00</p>
                    </div>
                    <div className=' flex justify-between border-b-2 border-gray-800 py-3'>
                      <p>Shipping Fee</p>
                      <p>$ 10.00</p>
                    </div>
                    <div className='flex justify-between py-3'>
                      <p className='font-bold'>Total</p>
                      <p className='font-bold'>$ {getTotalamount() + 10.00}.00</p>
                    </div>
                  </div>
                  <Link to='/placeolder'><button className='ml-44 p-4 bg-black text-white' onClick={(e)=>{
                    setPay(true)
                    e.target.classList.add('hidden')
                  }}>PROCEED TO CHECKOUT</button></Link>
                  <div className='' >
                        {
                           pay? <>
                              <div className='mt-8'>
                                <p className=' text-[20px] font-[500] inline-block'><span className='text-gray-600 font-normal'>PAYMENT  </span> METHOD</p>
                                <p className='bg-gray-800 w-12 h-1 self-center inline-block ml-3 mb-2'></p>
                              </div>

                          <div className='flex flex-col'>
                            <div className='flex gap-3'>
                            <div className='flex gap-3 border-2 px-2 w-fit mt-6 py-3'>
                                    <input type="radio" disabled/>
                                    <img src={assets.stripe_logo} alt="" className='w-16 ml-10'/>
                              </div>
                              <div className='flex gap-3 border-2 px-2 w-fit mt-6 py-3'>
                                    <input type="radio" disabled/>
                                    <img src={assets.razorpay_logo} alt="" className='w-24 ml-10'/>
                              </div>
                              <div className='flex gap-3 border-2 px-2 w-fit mt-6 py-3'>
                                    <input type="radio" />
                                    <p className='text-gray-600 text-[20px] font-[500]'>Cash On Deleviry</p>
                              </div>
                            </div>
                            <button  className=' p-4 px-20 bg-black text-white mt-5 w-fit self-end '>PLACE OEDER</button>
                          </div>
                           </>:null
                        }
                  </div>
              </div>
            </div>
     </div>



     <  div className='ml-auto mr-auto relative text-center mt-40'>
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
    </>
  )
}

export default Placeorders