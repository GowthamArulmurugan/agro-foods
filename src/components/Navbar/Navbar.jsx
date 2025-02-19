import React,{useState} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { useContext } from 'react';

const Navbar = ({setShowLogin}) => {
  
  const[product,setProduct] = useState("home");
  const {getTotalCartAmount}= useContext(StoreContext);
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setProduct('home')} className={product==="home"?"active":""}>Home</Link>
        <a href='#about-context' onClick={()=>setProduct('about')} className={product==="about"?"active":""}>About</a>
        <a href='#explore-product' onClick={()=>setProduct('product')} className={product==="product"?"active":""}>Products</a>
        <a href='#footer' onClick={()=>setProduct('contact-us')} className={product==="contact-us"?"active":""}>Contact</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" className="src" />
        <div className="navbar-serch-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" className="src" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
