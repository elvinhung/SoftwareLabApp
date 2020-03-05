import React from 'react';
import Header from "../components/Header";
import '../styles/Location.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import RestaurantListing from "../components/RestaurantListing";
import HotelListing from "../components/HotelListing";


const images = {
  img1: 'assets/ldn.jpg',
  img2: 'assets/ldn.jpg',
  img3: 'assets/ldn.jpg',
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

const allHotels = {
  name: "The Hoxton Holborn",
  location: "London, UK",
  URLname: "hoxton_holborn",
  address: "",
  rating: "RatingFour",
  description: "",
  imgURL: "assets/hoxton_holborn.jpg"
};

const LDN = () => {
  return (
    <div>
      <Header />
      <div className="instance_head">
        <div><PhotoCarousel images={images}/></div>
        <div className="instance_head_info">
          <h1>London</h1>
          <p>Lat. 51.5073509</p>
          <p>Long. -0.1277583</p>
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

export default LDN;