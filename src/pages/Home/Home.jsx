import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreProduct from '../../components/ExploreComponent/ExploreProduct'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import About from '../../components/About/About'

const Home = () => {

  const [category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <ExploreProduct category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <About/>
    </div>
  )
}

export default Home
