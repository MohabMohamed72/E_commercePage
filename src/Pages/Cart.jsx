import React, { useContext, useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import { cartNumber } from '../Components/Navbar'
import { Shopcontext } from '../Context/ShopContext'
import { assets, products } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {cartnumber ,updatecartdata ,getTotalamount} = useContext(Shopcontext)

  const [cartData , setCartData] = useState([])


  useEffect(()=>{
    const tempData = [] ;
    for(const items in cartnumber ){
      for(const item in cartnumber[items]){
        if(cartnumber[items] [item] >  0){
          tempData.push({
            _id:items,
            size:item,
            quantety:cartnumber[items][item]
          })
        }

      }
    }
    setCartData(tempData)
  },[cartnumber])

  // console.log(getTotalamount()[0])

  return (
    <div>
         <div className='grid grid-cols-2 mt-10 max-xl:grid-cols-1'>
            <div className='flex flex-col'>
                <div className=''>
                  <p className=' text-[30px] font-[500] inline-block'><span className='text-gray-600 font-normal'>YOUR </span> CART</p>
                  <p className='bg-gray-800 w-12 h-1 self-center inline-block ml-3 mb-2'></p>
                </div>
                <div className='mt-6 mb-10 '>
                    {
                      cartData.map((item)=>{
                        const ProductData = products.find((el)=>el._id=== item._id)
                        return(
                          <>
                          <div className='flex gap-6 mb-3 max-sm:flex-col max-sm:items-center '>
                            <img src={ProductData.image[0]} alt="" className='size-32 ' />
                            <div className='flex flex-col flex-wrap w-[300px]'>
                              <p className='font-bold text-[20px] max-sm:text-center'>{ProductData.name}</p>
                              <p className='font-bold text-[20px] max-sm:text-center'>${ProductData.price}</p>
                              <p className=' bg-gray-200  size-10 font-bold p-2 px-4 mt-3 max-sm:self-center'>{item.size}</p>
                            </div>
                            <input onChange={(e)=>{updatecartdata(item._id,item.size, Number(e.target.value))}} type="number" min={1} defaultValue={item.quantety} className=' border-md border-2  bg-white h-[40px] w-[100px] self-center px-3 focus:border-none focus:outline-none' />
                           <img onClick={()=>{updatecartdata(item._id,item.size, 0)}} className='w-4 h-5 ml-10 cursor-pointer self-center max-sm:mr-10 ' src={assets.bin_icon} alt=""  />
                          </div>
                          <hr className='max-sm:mb-6 w-full mt-2 mb-2 bg-black'/>
                          </>
                        )
                      })
                    }
                </div>
            </div>

            <div className='flex justify-end w-full xl:mt-96 max-lg:justify-center'>
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
                  <Link to='/placeolder'><button className='ml-44 p-4 bg-black text-white max-sm:w-full max-sm:ml-0'>PROCEED TO CHECKOUT</button></Link>
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

export default Cart