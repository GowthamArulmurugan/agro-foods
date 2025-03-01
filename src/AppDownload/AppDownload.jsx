import React from 'react'
import './AppDownlaod.css'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>Reasons to Choose Us<br/></p>
        <h6><br/>At GopalaKrishna Agro foods, we don't just sell products we provide a lifestyle built on Integrity, Transparency, and uncompromising Quality. Our customers trust us because we consistently deliver products that are pure, ethical, and nourishing. Whether it’s our cold-pressed oils or our new food essentials, you can count on us to uphold the highest standards of production.</h6>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
        </div>
        <hr/>
    </div>
  )
}

export default AppDownload