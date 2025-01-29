import React from 'react'
import './AgroItem.css'
import { assets } from '../../assets/assets'

const AgroItem = ({id,name,price,description,image}) => {
  return (
    <div className='agro-item'>
        <div className="agro-item-img-container">
            <img className='agro-item-image' src={image} alt=''/>
        </div>
        <div className='agro item-info'>
            <div className='agro-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts}></img>
            </div>
            <p className='agro-item-desc'>{description}</p>
            <p className='agro-item-price'>${price}</p>
        </div>
      
    </div>
  )
}

export default AgroItem
