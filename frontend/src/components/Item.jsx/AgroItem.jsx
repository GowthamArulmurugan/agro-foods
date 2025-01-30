import React, { useContext} from 'react'
import './AgroItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext'

const AgroItem = ({id,name,price,description,image}) => {

  const{cartItems,addToCart,removeFromCart}=useContext(StoreContext);

  return (
    <div className='agro-item'>
        <div className="agro-item-img-container">
            <img className='agro-item-image' src={image} alt=''/>
            {
              !cartItems[id]?
              <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/>:
              <div className='agro-item-counter'>
                  <img  onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>
                  </div>
            }
        </div>
        <div className='agro-item-info'>
            <div className='agro-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts}></img>
            </div>
            <p className='agro-item-desc'>{description}</p>
            <p className='agro-item-price'>₹{price}</p>
        </div>
      
    </div>
  )
}

export default AgroItem
