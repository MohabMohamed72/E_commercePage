import {Routes ,Route} from 'react-router-dom'
import Navbar, { cartNumber } from './Components/Navbar'
import Home from './Pages/Home'
import Collections from './Pages/Collections'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Orders from './Pages/Orders'
import Placeorders from './Pages/Placeorders'
import { createContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';



export const cartvalue = createContext()
function App() {

let Cartnumebr = 0
  return (
    <main className='px-5 sm:px-[5vw] lg:px-[9vw] md:px-[6vw] '>
      <ToastContainer />
      <section>
        
          <Navbar />
        
      </section>
      <hr className='translate-y-5'/>
      <section>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/collections' element={<Collections />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/cart' element={<Cart />}/>
            {/* <cartvalue.Provider value={cartNumber} > */}
              <Route path='/product/:productid' element={<Product />}/>
            {/* </cartvalue.Provider> */}
            <Route path='/orders' element={<Orders />}/>
            <Route path='/placeolder' element={<Placeorders />}/>
        </Routes>
      </section>
    </main>
  )
}

export default App
