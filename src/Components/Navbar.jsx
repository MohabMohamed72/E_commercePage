import React, { useContext } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import {Link , NavLink} from 'react-router-dom'

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
    <div className='pt-5 flex items-center justify-between relative'>
      <img src={assets.logo} alt="" />
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
        <Link to='/login'> <img src={assets.profile_icon} alt="" className='size-7 cursor-pointer max-md:hidden'/></Link>
        <div>
          <Link to='/cart'> <img src={assets.cart_icon} alt=""    className='size-7 cursor-pointer max-md:hidden '/></Link>
          <p className='text-white bg-black w-5 rounded-full text-center absolute bottom-1 right-1 max-md:hidden '>{cartcounter()}</p>
        </div>
        <img src={assets.menu_icon} className='size-7 cursor-pointer max-md:block hidden' alt="" onClick={()=>{
          Menucounter++;
          (Menucounter % 2 !== 0)? showmenu():hidemenu()
        }}/>
        <div id='menu' className='absolute right-0 top-[110px] bg-[#f6f6f6] rounded-2xl hidden md:hidden' onClick={hidemenu}>
        <Link to='/'><p className='p-3 px-10 hover:bg-black hover:text-white'>Home</p></Link>
        <Link to='/collections'><p className='p-3 px-10 hover:bg-black hover:text-white'>Collections</p></Link>
        <Link to='/about'><p className='p-3 px-10 hover:bg-black hover:text-white'>About</p></Link>
        <Link to='/contact'><p className='p-3 px-10 hover:bg-black hover:text-white'>Contact</p></Link>
        <Link to='/cart'><p className='p-3 px-10 hover:bg-black hover:text-white'>Cart</p></Link>
        </div>
      </div>
    </div> 
    
)
}

export default Navbar