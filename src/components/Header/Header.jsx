import React, { useState, useEffect } from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const images = [
  assets.banner,
  assets.banner1,
];

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = images[currentImage];  // Preload next image
    img.onload = () => setLoaded(true);

    const interval = setInterval(() => {
      setLoaded(false); // Fade out before switching
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 500); // Ensure smooth fade transition
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div
      className={`header ${loaded ? "fade-in" : "fade-out"}`}
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <div className="header-contents">
        <h2>Welcome To <br /> Gopalakrishna</h2>
        <h1>Agro Foods</h1>
        <button>Products</button>
        <div className="header-icon">
          <img src={assets.facebook_icon} alt="Facebook" />
          <img src={assets.twitter_icon} alt="Twitter" />
          <img src={assets.linkedin_icon} alt="LinkedIn" />
        </div>
      </div>
    </div>
    
  );
};

export default Header;



