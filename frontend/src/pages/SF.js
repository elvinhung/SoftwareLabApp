import React from 'react';
import Header from "../components/Header";
import '../styles/Location.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import RestaurantListing from "../components/RestaurantListing";
import HotelListing from "../components/HotelListing";


const images = {
  img1: 'assets/sf.jpg',
  img2: 'assets/sf.jpg',
  img3: 'assets/sf.jpg',
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

const allHotels = {
  name: "The Westgate Hotel",
  location: "San Francisco, US",
  URLname: "west_gate",
  address: "",
  rating: "RatingFour",
  description: "",
  imgURL: "assets/roxie_food_center.jpg"
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
      <div className="instance-content-container">
        <div className="listing-container">
          <h3>Restaurants</h3>
          <RestaurantListing restaurant={allRestaurants}/>
        </div>
        <div className="listing-container">
          <h3>Hotels</h3>
          <HotelListing hotel={allHotels}/>
        </div>
      </div>
    </div>
  );
};

export default SF;