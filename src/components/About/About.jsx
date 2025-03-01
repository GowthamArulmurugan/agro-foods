import React from 'react';
import './About.css';
import { assets } from '../../assets/assets';

const About = () => {
  return (
    <div className='about-context' id='about-context'>
        <img src={assets.about} alt="" />
        <p>
        Welcome to Sri GopalaKrishna Agro Foods, a division of Sri GopalaKrishna Rice, Flour, and Oil Mills, where tradition and quality come together to deliver excellence in Agro-food products. Established by the visionary Thiru. A. Gopal, the company began its journey with a small rice mill. Through his unwavering dedication, the mill steadily grew to achieve a production capacity of up to 10 tonnes per day.
        </p>
        
        <p>
          Building on this strong foundation, Mr. G. Arulmurugan, his son, propelled the industries to new heights, expanding operations and diversifying into a broader range of products. Today, Sri GopalaKrishna Agro Foods is a trusted name in the agro-food industry, delivering high-quality rice, flours, oils, and spices to customers.
        </p>
         
        <p>Our operations encompass a wide range of agro-food products to cater to the diverse needs of our customers:</p>
        <ul>
          <li>Rice Milling: Producing premium Indian rice varieties with an emphasis on taste, nutrition, and quality</li>
          <p>Sourced from the finest fields, our rice varieties offer the perfect balance of taste, nutrition, and purity. Rich in essential carbohydrates, vitamins, and minerals, our premium rice is ideal for a wholesome diet. At Goplalakrishna Agro-foods, we ensure that each grain retains its natural aroma, texture, and nutritional value, delivering an authentic and satisfying experience with every meal.</p>
          <li>Flour Milling: Offering high-quality wheat and rice flours, processed with care for everyday use.</li>
          <p>Flours
          Milled from high-quality, unpolished grains, our flours are pure, nutritious, and perfect for every culinary need. Whether you’re baking, cooking, or preparing traditional dishes, our flours provide an unbeatable foundation for your recipes.</p>
          <li>Oil Production: Specializing in gingelly, groundnut, and coconut oils known for their purity and flavor.</li>
        <p>Extracted from the finest seeds and nuts, our oils are rich in essential fatty acids, antioxidants, and nutrients that promote overall well-being. Our oils enhance the taste of your dishes while providing numerous health benefits. At Gopalakrishna Agro foods, we ensure that every drop maintains its natural goodness, making it the perfect choice for a healthy lifestyle.</p>
        </ul>
        
        <div className='about-quality'>
        <img src={assets.abt}></img>
          </div>
        <br/><hr/>
    </div>
  );
};

export default About;
