import React from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";

const FishHouse = () => {
  const images = {
    img1: "assets/fish_house.jpg",
    img2: "assets/fish_house.jpg",
    img3: "assets/fish_house.jpg"
  };

  return(
    <div>
      <Header />

      <div class="instance_head">

        <div><PhotoCarousel images={images}/></div>
        <div class="instance_page_info">
          <h2>Fish House</h2>

          <div className="instance_location"><p>{"San Francisco, US"}</p></div>
          <div><Ratings rating={"RatingFour"}/></div>

          <p></p>
        </div>
      </div>
    </div>
  );
}

export default FishHouse;