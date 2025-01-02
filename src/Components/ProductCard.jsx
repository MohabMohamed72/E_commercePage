import React, { useEffect } from 'react'
import {Link, NavLink, useParams} from 'react-router-dom'

const ProductCard = (props) => {

  // useEffect(()=>{
  //   window.location.reload()
  // },[props])

  return (
   
        <div key={props.id} className='flex flex-col justify-center mt-20 transition-all duration-700 overflow-hidden'>
           <Link to={`/product/${props.id}`} className='m-0 p-0'>
            <div className='overflow-hidden '>  <img   src={props.image} alt="" className='max-w-full h-auto w-[300px] cursor-pointer hover:scale-125' /></div>
            </Link>
            <h1 className=' mt-3 text-[20px] text-gray-800 w-3/4 h-fit  cursor-pointer'>{props.title}</h1>
            <h1 className='mt-2 font-bold text-[#333]  cursor-pointer'>${props.price}</h1>
        </div>
     
  )
}

export default ProductCard