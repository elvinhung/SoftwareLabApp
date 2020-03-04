import React from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import RestaurantListing from "../components/RestaurantListing";

const HoxtonHolborn = () => {
  const images = {
    img1: "assets/south_kensington.jpg",
    img2: "assets/south_kensington.jpg",
    img3: "assets/south_kensington.jpg"
  };
  const allRestaurants = {
    name: "Wright Brothers - South Kensington",
    location: "London, UK",
    URLname: "south_kensington",
    address: "",
    rating: "RatingFourAndHalf",
    description: "",
    imgURL: "assets/south_kensington.jpg"
  };

  return(
    <div>
      <Header />

      <div class="instance_head">

        <div><PhotoCarousel images={images}/></div>
        <div class="instance_head_info">
          <h2>The Hoxton Holborn</h2>

          <div className="instance_location"><p>{"London, UK"}</p></div>
          <div><Ratings rating={"RatingFour"}/></div>

          <p></p>
        </div>
      </div>

      <div className="information">
        <p>Restaurants nearby: </p>
        <RestaurantListing restaurant={allRestaurants}/>
      </div>
    </div>
  );
}

export default HoxtonHolborn;