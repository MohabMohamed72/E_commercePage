import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import {products} from '../assets/frontend_assets/assets'

const Latestcollection = () => {

    const [Product , setProduct] =useState([])

    useEffect(()=>{
        const data = products.filter((el)=>(el?.date > 1716657445448))
        setProduct(data)
    },[])

    

    
  return (
   <div className='mt-20'>
    <div className='flex justify-center'>
        <h1 className='m-0 text-[35px] font-[500]'><span className='text-gray-600 font-normal'>LATEST</span> COLLECTIONS</h1>
        <p className='font-[900] text-[35px] translate-y-[-18px] mr-1'>_____</p>
    </div>
    <p className='text-center text-[20px] text-gray-800 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
    <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {
            Product.map((el)=>{
                return(
                    <ProductCard id={el._id} image = {el.image} title = {el.name} price = {el.price} />
                )
            })
        }
    </div>
   </div>
  )
}

export default Latestcollection