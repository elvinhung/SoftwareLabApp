import React from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import HotelListing from "../components/HotelListing";

const FishHouse = () => {
  const images = {
    img1: "assets/fish_house.jpg",
    img2: "assets/fish_house.jpg",
    img3: "assets/fish_house.jpg"
  };
  const allHotels = {
    name: "The Westgate Hotel",
    location: "San Francisco, US",
    URLname: "west_gate",
    address: "",
    rating: "RatingFour",
    description: "",
    imgURL: "assets/roxie_food_center.jpg"
  };

  return(
    <div>
      <Header />

      <div class="instance_head">

        <div><PhotoCarousel images={images}/></div>
        <div class="instance_head_info">
          <h2>Fish House</h2>

          <div className="instance_location"><p>{"San Francisco, US"}</p></div>
          <div><Ratings rating={"RatingFour"}/></div>

          <p></p>
        </div>
      </div>

      <div className="information">
        <p>Hotels nearby: </p>
        <HotelListing hotel={allHotels}/>
      </div>
    </div>
  );
}

export default FishHouse;