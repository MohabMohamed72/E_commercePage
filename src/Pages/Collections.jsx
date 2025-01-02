import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import {assets, products} from '../assets/frontend_assets/assets'
import Footer from '../Components/Footer'
let x = 0

const Collections = () => {

    const [product ,setproducts] =useState([])
    const [categ,setCateg]=useState([])
    const [subcateg,setSubcateg]=useState([])
    const [select ,setSelect] = useState('')
    const [serchitem , setSearchItem] = useState('')


  const GetCateg = (e)=>{
    if( categ.includes(e.target.value)  ){
      setCateg(el=>el.filter(x=> x !== e.target.value))
    }
    else{
      setCateg(el=>[...el , e.target.value])
    }
  }


  const GetSubcateg = (e)=>{
    if( subcateg.includes(e.target.value)  ){
      setSubcateg(el=>el.filter(x=> x !== e.target.value))
    }
    else{
      setSubcateg(el=>[...el , e.target.value])
    }
  }

  let applyFilter = ()=>{
    let Productscopy = products.slice()
    if(serchitem.length > 0){
      Productscopy = Productscopy.filter(el => el.name.toLowerCase().includes(serchitem.toLocaleLowerCase()))
    }
    if(categ.length > 0){
      Productscopy = Productscopy.filter(el => categ.includes(el.category))
    }
    if(subcateg.length > 0){
      Productscopy = Productscopy.filter(el => subcateg.includes(el.subCategory))
    }

    setproducts(Productscopy)
  }
    
  let GetSelection = (e)=>{
      let filtercopy = product.slice()

      switch(select){
        case 'lth':
          setproducts(filtercopy.sort((a,b)=>(a.price - b.price)))
          break;
        case 'htl':
          setproducts(filtercopy.sort((a,b)=>(b.price - a.price)))
          break;
        default:
          applyFilter();

      }
  }

    useEffect(()=>{ 

      const data = products.filter((el)=>el)
      setproducts(data)
      
    },[])

    useEffect(()=>{
      applyFilter()
      
    },[categ,subcateg,serchitem])

    useEffect(()=>{
      GetSelection()
    },[select])


    const getSearchitem = (e)=>{
      setSearchItem(e.target.value)
    }



    
  return (
    <>
       
    <div  id='serch' className=' hidden flex items-center content-center justify-center mt-5 border-b-2  bg-[#f6f6f6] py-5  focus:outline-none focus:border-none ' onChange={getSearchitem}>
      <input type="serch" className=' w-[80%] h-10 px-3 rounded-3xl  bg-[#eee] ml-auto mr-auto' placeholder='Search here'/>
      <img src={assets.cross_icon} alt="" className='size-5 mr-6' onClick={()=>{
        document.querySelector('#serch').classList.add('hidden')
      }}/>
    </div>
    <div className='flex mt-12'>
      <div className='max-md:hidden mr-14'>
        <h1 className='font-[400] text-[30px] mt-10'>FILTERS</h1>
        <div className='border-2 p-5 pr-28 mt-6'>
          <h1 className='font-[500] mb-2'>CATEGORIES</h1>
            <div className='mb-2'>
              <input type="checkbox" id='mens' value={'Men'} onChange={GetCateg}   />
              <label htmlFor="mens"  className='ml-2'>Mens</label>
            </div>
            <div className='mb-2'>
              <input type="checkbox" id='women' value={'Women'} onChange={GetCateg}/>
              <label htmlFor="women"  className='ml-2'>Women</label>
            </div>
            <div>
              <input type="checkbox" id='kids' value={'Kids'} onChange={GetCateg}/>
              <label htmlFor="kids" className='ml-2' >Kids</label>
            </div>
        </div>
        <div className='border-2 p-5 pr-32 mt-6'>
          <h1 className='font-[500] mb-2'>TYPE</h1>
            <div className='mb-2'>
              <input type="checkbox" id='Topwear' value={'Topwear'} onChange={GetSubcateg}/>
              <label htmlFor="Topwear"  className='ml-2'>Topwear</label>
            </div>
            <div className='flex mb-2'>
              <input type="checkbox" id='Bottomwear' value={'Bottomwear'} className='inline-block' onChange={GetSubcateg}/>
              <label htmlFor="Bottomwear"  className='ml-2 inline-block '>Bottomwear</label>
            </div>
            <div>
              <input type="checkbox" id='Winterwear' value={'Winterwear'} className='inline-block' onChange={GetSubcateg}/>
              <label htmlFor="Winterwear" className='ml-2 inline-block' >Winterwear</label>
            </div>
        </div>
      </div>

      <div>
       <div className='flex justify-between max-sm:flex-col max-sm:items-center'>
       <div className='flex '>
          <p className='mt-10 text-[35px] font-[500] max-sm:text-center'><span className='text-gray-600 font-normal'>ALL</span> COLLECTIONS</p>
          <p className='bg-gray-800 w-16 h-1 self-center translate-y-5 ml-3 max-sm:hidden'></p>
        </div>
        <div>
          <select name="" id="" className='border-2 border-gray-800 py-3 px-2 mt-10' onChange={(e)=>{
              setSelect(e.target.value)
            }}>
            <option value="rel"  >Sort by: Relavent</option>
            <option value="lth">Sort by: Low to High</option>
            <option value="htl">Sort by: High To Low</option>
          </select>
        </div>
       </div>
        <div className="contant grid grid-cols-4 gap-3 max-lg:grid-cols-3 max-sm:grid-cols-2">
            {
              product.map((el)=>{
                return(
                    <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
                )
              })
            }
          </div>
      </div>
    </div>
    <Footer />
    <hr className='w-full mt-16' />
      <p className='text-center py-6 text-[20px] font-[600]'>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
    </>
  )
}

export default Collections