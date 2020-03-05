import React from 'react';
import Header from "../components/Header";
import '../styles/Location.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";


const images = {
  img1: 'assets/ldn.jpg',
  img2: 'assets/ldn.jpg',
  img3: 'assets/ldn.jpg',
};

const LDN = () => {
  return (
    <div>
      <Header />
      <div className="instance_head">
        <div><PhotoCarousel images={images}/></div>
        <div className="instance_head_info">
          <h1>London</h1>
          <p>Lat. 51.5073509</p>
          <p>Long. -0.1277583</p>
        </div>
      </div>
    </div>
  );
};

export default LDN;