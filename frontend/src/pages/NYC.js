import React from 'react';
import Header from "../components/Header";
import '../styles/Location.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";

const images = {
  img1: 'assets/nyc.jpg',
  img2: 'assets/nyc.jpg',
  img3: 'assets/nyc.jpg',
};

const NYC = () => {
  return (
    <div>
      <Header />
      <div className="instance_head">
        <div><PhotoCarousel images={images}/></div>
        <div className="instance_head_info">
          <h1>New York</h1>
          <p>Lat. 40.7127753</p>
          <p>Long. -74.0059728</p>
        </div>
      </div>
    </div>
  );
};

export default NYC;