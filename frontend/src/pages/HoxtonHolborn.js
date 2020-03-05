import React from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import RestaurantListing from "../components/RestaurantListing";

const HoxtonHolborn = () => {
  const images = {
    img1: "assets/hoxton_holborn.jpg",
    img2: "assets/hoxton_holborn.jpg",
    img3: "assets/hoxton_holborn.jpg"
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

          <div className="instance_location">
            <a className="location_link" href={"/locations/ldn"}>{"London, UK"}</a>
          </div>
          <div><Ratings rating={"RatingTwo"}/></div>

          <p></p>
          <p>
            <i className="fa fa-map-marker contact"></i> 199-206 High Holborn, London WC1V 7BD, United Kingdom <br></br>
          </p>
        </div>
      </div>

      <div className="information listing_container">
        <p>Restaurants nearby: </p>
        <RestaurantListing restaurant={allRestaurants}/>
      </div>
    </div>
  );
}

export default HoxtonHolborn;