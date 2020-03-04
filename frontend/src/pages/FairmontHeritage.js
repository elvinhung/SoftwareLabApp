import React from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import RestaurantListing from "../components/RestaurantListing";

const FairmontHeritage = () => {
  const images = {
    img1: "assets/fairmont_heritage.jpg",
    img2: "assets/fairmont_heritage.jpg",
    img3: "assets/fairmont_heritage.jpg"
  };
  const allRestaurants = {
    name: "Fog Harbor Fish House",
    location: "San Francisco, US",
    URLname: "fish_house",
    address: "",
    rating: "RatingFour",
    description: "",
    imgURL: "assets/fish_house.jpg"
  };

  return(
    <div>
      <Header />

      <div class="instance_head">

        <div><PhotoCarousel images={images}/></div>
        <div class="instance_head_info">
          <h2>Fairmont Heritage Place - Ghirardelli Square</h2>

          <div className="instance_location"><p>{"San Francisco, US"}</p></div>
          <div><Ratings rating={"RatingFive"}/></div>

          <p></p>
          <p>
            <i className="fa fa-map-marker contact"></i> 900 North Point, San Francisco, CA 94109 <br></br>
          </p>
        </div>
      </div>

      <div className="information">
        <p>Restaurants nearby: </p>
        <RestaurantListing restaurant={allRestaurants}/>
      </div>
    </div>
  );
}

export default FairmontHeritage;