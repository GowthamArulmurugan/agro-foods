import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div className='header'>
       <div className="header-contents">
        <h2>Welcome To <br></br>Gopalakrishna</h2>
        <h1>Agro foods</h1>
        <button>Products</button>
        <div className='header-icon'>
        <img src={assets.facebook_icon} alt="" className="src" />
        <img src={assets.twitter_icon} alt="" className="src" />
        <img src={assets.linkedin_icon} alt="" className="src" />
        </div>
        </div> 
      
    </div>
  )
}

export default Header
