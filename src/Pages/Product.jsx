import React, { useContext, useEffect, useState } from 'react'
import Contact from './Contact'
import {products} from '../assets/frontend_assets/assets'
import {assets} from '../assets/frontend_assets/assets'
import { useParams } from 'react-router-dom'
import { use } from 'react'
import Footer from '../Components/Footer'
import { Shopcontext } from '../Context/ShopContext'
import ProductCard from '../Components/ProductCard'




const Product = () => {

  const {cartnumber , addtocart} = useContext(Shopcontext)

  const {productid} = useParams()

  const [product ,setProduct] = useState({})
  const [imgs ,setImgs] = useState([])
  const [sizes ,setSize] = useState([])
  const [subCategory , setsubCategory] =useState([])
  const [Categ , setCateg] = useState('')
  const [price , setPrice] = useState('')
  const [sizebtn , setSizebtn] = useState('')

  const GetProduct = ()=>{
    products.map((el)=>{
      if(el._id === productid) {
        setProduct(el)
        setImgs(el.image)
        setSize(el.sizes)
        setCateg(el.category)
        setsubCategory(el.subCategory)
        setPrice(el.price)
      }
    
    })
  }

  
  useEffect(()=>{
    GetProduct()
  },[])
   let x = 0;


  let bigimg = <img src={imgs[(imgs.length-1 )]} alt="" className='h-full w-[800px]'/>
 

  return (
    <div className='mt-12 grid grid-cols-2 max-sm:grid-cols-1 transition-all'>
      <div className='flex gap-6 h-full'>
        <div className='flex flex-col gap-3 max-sm:hidden'>
        {
          imgs.map((el)=>{
            return(
              <img src={el} alt="" className='size-40 cursor-pointer'/>
            )
          })
        }  
        </div>
        <div>
          {bigimg}
          {/* <img src={bigimg} alt="" className='h-full w-[800px]' /> */}
        </div>
      </div>
      <div className='md:ml-10 '>
        <h1 className='font-bold text-[25px] mb-4'>{product.name}</h1>
        <div className='flex items-center'>
          <img src={assets.star_icon} className='size-4' alt="" />
          <img src={assets.star_icon} className='size-4' alt="" />
          <img src={assets.star_icon} className='size-4' alt="" />
          <img src={assets.star_icon} className='size-4' alt="" />
          <img src={assets.star_dull_icon} className='size-4' alt="" />
          <p className='ml-2'>(112)</p>
        </div>
        <h1 className='font-bold mt-6 text-[25px]'>${product.price}</h1>
        <p className='text-[20px] text-gray-500 mt-6'>{product.description}</p>
        <p className='text-[20px] font-[500] text-black mt-6'>Select Size</p>
        <div className='flex gap-3 mt-5'>
          {
            sizes.map((el)=>{
              return(
                <button value={el} className='p-4 bg-gray-200 ml-2 size-16 focus:border-black focus:border-2' onClick={(e)=>{setSizebtn(e.target.value)}}>{el}</button>
              )
            })
          }
        </div>
        <button className='mt-6 p-3 bg-black text-white px-10' onClick={()=>{
          addtocart(product._id , sizebtn)
        }}>Add to Card</button>
        <hr className='mt-10' />
        <div className='mt-6 text-[18px] text-gray-500'>
          <p>100% Original product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>

      <div className='mt-16 w-full col-span-2'>
        <div className='flex'>
          <p className='p-5 border-2 font-bold'>Description</p>
          <p className='p-5 border-2 '>Reviews (122)</p>
        </div >
         <div className='p-3 border-2 w-full text-gray-500'>
          <p className='w-auto'>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p className='w-full mt-6'>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
          </div>  
      </div>
      <div className='text-center col-span-2 mt-10'>
            <p className=' text-[30px] font-[500] inline-block'><span className='text-gray-600 font-normal'>RELATED  </span>PRODUCTS</p>
            <p className='bg-gray-800 w-12 h-1 self-center inline-block ml-3 mb-2'></p>
      </div>

        <div className='flex flex-wrap col-span-2 gap-5 mt-10'>
          {
            products.filter((el)=>(el.category === Categ && el.subCategory===subCategory ))
            .map((el)=>{
              if(x < 5){
                x++;
                return(
                  <div className='flwx flex-col transition-all'onClick={()=>{
                    // window.location.reload()
                    window.scrollTo(0,0) }}>
                    <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
                      {/* <img src={el.image[0]} alt="" />
                      <h1 className='mt-3'>{el.name}</h1>
                      <h1 className='font-bold'>${el.price}</h1> */}
                  </div>
                    
                )
              }
            })
          }
        </div>

          <div className='col-span-2'>
                <Footer />
            <hr className='w-full mt-16' />
            <p className='text-center py-6 text-[20px] font-[600]'>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
          </div>
    </div>
  )
}

export default Product