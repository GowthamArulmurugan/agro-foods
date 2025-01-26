import React,{useState} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  
  const[product,setProduct] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className='navbar-menu'>
        <li onClick={()=>setProduct('home')} className={product==="home"?"active":""}>Home</li>
        <li onClick={()=>setProduct('about')} className={product==="about"?"active":""}>About</li>
        <li onClick={()=>setProduct('product')} className={product==="product"?"active":""}>Products</li>
        <li onClick={()=>setProduct('contact-us')} className={product==="contact-us"?"active":""}>Contact</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" className="src" />
        <div className="navbar-serch-icon">
          <img src={assets.basket_icon} alt="" className="src" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
