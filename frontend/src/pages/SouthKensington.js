import React from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";

const SouthKensington = () => {
  const images = {
    img1: "assets/south_kensington.jpg",
    img2: "assets/south_kensington.jpg",
    img3: "assets/south_kensington.jpg"
  };

  return(
    <div>
      <Header />

      <div class="instance_head">

        <div><PhotoCarousel images={images}/></div>
        <div class="instance_page_info">
          <h2>Wright Brothers - South Kensington</h2>

          <div className="instance_location"><p>{"London, UK"}</p></div>
          <div><Ratings rating={"RatingFourAndHalf"}/></div>

          <p></p>
        </div>
      </div>
    </div>
  );
}

export default SouthKensington;