import React from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";

const CrabHouse = () => {
  const images = {
    img1: "assets/crab_house.jpg",
    img2: "assets/crab_house.jpg",
    img3: "assets/crab_house.jpg"
  };

  return(
    <div>
      <Header />

      <div class="instance_head">

        <div><PhotoCarousel images={images}/></div>
        <div class="instance_page_info">
          <h2>Crab House</h2>

          <div className="instance_location"><p>{"New York City, US"}</p></div>
          <div><Ratings rating={"RatingFour"}/></div>

          <p></p>
        </div>
      </div>
    </div>
  );
}

export default CrabHouse;