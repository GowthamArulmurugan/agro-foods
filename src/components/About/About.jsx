import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <div className='about-context' id='about-context'>
        <hr/>
        <img src={assets.about} alt="" />
        <p>Welcome to Sri GopalaKrishna Agro Foods, a proud division of Sri GopalaKrishna Rice, Flour, and Oil Mills, where tradition and quality come together to deliver excellence in Agro-food products. Established by the visionary Thiru. A. Gopal, the company began its journey with a small rice mill. Through his unwavering dedication, the mill steadily grew to achieve a production capacity of up to 10 tonnes per day.<br/>
<br/>
Building on this strong foundation, Mr. G. Arulmurugan, his son, propelled the industries to new heights, expanding operations and diversifying into a broader range of products. Today, Sri GopalaKrishna Agro Foods is a trusted name in the agro-food industry, delivering high-quality rice, flours, oils, and spices to customers<br/><br/>
<ul>
  <li>Our operations encompass a wide range of agro-food products to cater to the diverse needs of our customers:</li>
  <li>Rice Milling: Producing premium Indian rice varieties with an emphasis on taste, nutrition, and quality</li>
  <li>Flour Milling: Offering high-quality wheat and rice flours, processed with care for everyday use.</li>
  <li>Oil Production: Specializing in gingelly, groundnut, and coconut oils known for their purity and flavor.</li>
</ul>
<br/>
With advanced infrastructure for manufacturing, processing, and packaging, we ensure the highest standards in every product.<br/> Our success is rooted in our dedication to customer satisfaction, competitive pricing, and maintaining consistent quality. Experience the tradition, taste, and trust of Sri GopalaKrishna Agro Foods.</p>
      
    </div>
  )
}

export default About
