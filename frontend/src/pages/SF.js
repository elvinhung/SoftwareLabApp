import React from 'react';
import Header from "../components/Header";
import '../styles/Location.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";


const images = {
  img1: 'assets/sf.jpg',
  img2: 'assets/sf.jpg',
  img3: 'assets/sf.jpg',
};
const SF = () => {
  return (
    <div>
      <Header />
      <div className="instance_head">
        <div><PhotoCarousel images={images}/></div>
        <div className="instance_head_info">
          <h1>San Francisco</h1>
          <p>Lat. 37.7749295</p>
          <p>Long. -122.4194155</p>
        </div>
      </div>
    </div>
  );
};

export default SF;