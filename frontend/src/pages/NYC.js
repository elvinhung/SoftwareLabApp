import React from 'react';
import Header from "../components/Header";
import '../styles/Location.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import RestaurantListing from "../components/RestaurantListing";
import HotelListing from "../components/HotelListing";

const images = {
  img1: 'assets/nyc.jpg',
  img2: 'assets/nyc.jpg',
  img3: 'assets/nyc.jpg',
};

const allRestaurants = {
  name: "Crab House All You Can Eat Seafood",
  location: "New York City, US",
  URLname: "crab_house",
  address: "",
  rating: "RatingFour",
  description: "",
  imgURL: "assets/crab_house.jpg"
};

const allHotels = {
  name: "The Leon Hotel",
  location: "New York City, US",
  URLname: "leon_hotel",
  address: "",
  rating: "RatingFour",
  description: "",
  imgURL: "assets/leon_hotel.jpg"
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
      <div className="instance-content-container">
        <div className="listing-container">
          <h3>Nearby Restaurants</h3>
          <RestaurantListing restaurant={allRestaurants}/>
        </div>
        <div className="listing-container">
          <h3>Nearby Hotels</h3>
          <HotelListing hotel={allHotels}/>
        </div>
      </div>
    </div>
  );
};

export default NYC;