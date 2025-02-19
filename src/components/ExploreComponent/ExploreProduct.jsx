import React from 'react'
import './ExploreProduct.css'
import { product_list } from '../../assets/assets'
const ExploreProduct = ({category,setCategory}) => {
  return (
    <div className='explore-product' id='explore-product'>
        <h1>Our Products</h1>
        <p className='explore-product-text'>Checkout our extensive range of Agro food products right from Rice, 
        Groundnut oil, Gingelly oil, Coconut oil to all type of Flours & more. We are helping people to improve their health with our 100% Quality Products. All products are superior in quality.
        At most care given to maintain quality.</p>
        <div className='explore-product-list'>
            {product_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.product_name?"All":item.product_name)} key={index} className='explore-product-list-item'>
                        <img className={category===item.product_name?"active":""} src={item.product_image}  alt="" />
                        <p>{item.product_name}</p>
                        </div>
                )
            })}
        </div>
        <hr />
      
    </div>
  )
}

export default ExploreProduct
