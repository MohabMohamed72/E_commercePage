import React, { useContext } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import {Link , NavLink} from 'react-router-dom'
import { IoIosCloseCircle } from "react-icons/io";

import { cartvalue } from '../App';
import { Shopcontext } from '../Context/ShopContext';

export let x = 0
export let cartNumber = 0 ;

let Menucounter = 0;


const showmenu = ()=>{
  document.querySelector('#menu').classList.remove('hidden')
}
const hidemenu = ()=>{
  document.querySelector('#menu').classList.add('hidden')
}

const Navbar = () => {

  const {cartcounter} = useContext(Shopcontext)
// 
  // const value = useContext(cartvalue);
  return (
    <div className='z-[100] pt-5 flex items-center justify-between relative max-sm:w-full'>
      <img src={assets.logo} alt="" className='max-sm:w-[150px] max-md:hidden'/>
      <ul className='hidden md:flex gap-6 '>
        <NavLink to='/' className='flex flex-col items-center'>
          <p>HOME</p>
          <hr className='hidden bg-gray-700 w-3/4 h-0.5'/>
        </NavLink>
        <NavLink to='/collections' className='flex flex-col items-center'>
          <p>COLLECTIONS</p>
          <hr className='hidden bg-gray-700 w-3/4 h-0.5'/>
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center'>
          <p>ABOUT</p>
          <hr className='hidden bg-gray-700 w-3/4 h-0.5'/>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center'>
          <p>CONTACT</p>
          <hr className='hidden bg-gray-700 w-3/4 h-0.5'/>
        </NavLink>
      </ul>
      <div className='flex gap-2'>
        <Link to='/collections'><img id='' src={assets.search_icon} alt=""  className='size-7 cursor-pointer max-md:hidden' onClick={(e)=>{
          x++;
          ((x % 2) !== 0 )? document.querySelector('#serch').classList.remove('hidden'):document.querySelector('#serch').classList.add('hidden')
        }}/></Link>
        
        <Link to='/login'> <img src={assets.profile_icon} alt="" className='size-7 cursor-pointer '/></Link>
       
        <div>
          <Link to='/cart'> <img src={assets.cart_icon} alt=""    className='size-7 cursor-pointer  '/></Link>
          <p className='text-white bg-black w-5 rounded-full text-center absolute bottom-1 right-1  max-sm:left-12 max-sm:bottom-[-15px] '>{cartcounter()}</p>
        </div>

        <img src={assets.menu_icon} className='max-sm:mr-3 size-7 cursor-pointer max-md:block hidden max-sm:absolute max-sm:right-0' alt="" onClick={()=>{
          Menucounter++;
          (Menucounter % 2 !== 0)? showmenu():hidemenu()
        }}/>
        <div id='menu' className='' onClick={hidemenu}>

          <ul className='h-[100vh] absolute top-0 right-0 w-1/2 bg-white z-[100]'>
          <IoIosCloseCircle className='mt-3 ml-2 size-6' onClick={()=>{hidemenu()}} />
          <img src={assets.logo} alt="" className='max-sm:w-[150px] ml-auto mr-auto mt-5 mb-5'/>


          <Link to='/'>
            <li className='p-3 px-10 hover:bg-black hover:text-white'>Home</li>
            <hr className='w-full'/>
          </Link>
          <Link to='/collections'>
            <li className='p-3 px-10 hover:bg-black hover:text-white'>Collections</li>
            <hr className='w-full'/>
          </Link>
          <Link to='/about'> 
            <li className='p-3 px-10 hover:bg-black hover:text-white'>About  </li>
            <hr className='w-full'/>
            </Link>
          <Link to='/contact'> 
          <li className='p-3 px-10 hover:bg-black hover:text-white'>Contact</li>
          <hr className='w-full'/>
          </Link>
         
           </ul>
        </div>
      </div>
    </div> 
    // h-[90vh] overflow-hidden flex flex-col absolute top-0 right-0 bg-white
    
)
}

export default Navbar