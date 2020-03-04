import React from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/RestaurantInstance.css';
import PhotoCarousel from "../components/PhotoCarousel";

const HoxtonHolborn = () => {
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
          <h2>Hoxton Holborn</h2>
          <Ratings rating={"RatingFour"}/>
          <p>No-frills deli with theatrically cranky service serving mile-high sandwiches since 1888.</p>
        </div>
      </div>
    </div>
  );
}

export default HoxtonHolborn;