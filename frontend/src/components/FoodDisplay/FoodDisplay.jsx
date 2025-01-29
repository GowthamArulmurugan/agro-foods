import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContext'
import AgroItem from '../Item.jsx/AgroItem'

const FoodDisplay = ({category}) => {

    const {item_list}=useContext(StoreContext)
  return (
    <div classname='item-display' id='item-display'>
      <h2>Our Products</h2>
      <div className='item-display-list'>
        {item_list.map((item,index)=>{
            return  <AgroItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
