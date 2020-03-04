import React from 'react';
import Header from "../components/Header";
import 'font-awesome/css/font-awesome.min.css';
import RestaurantListing from "../components/RestaurantListing";
import '../styles/ModelPage.css';

const Restaurant = () => {
  const allRestaurants = [
    {
      name: "Wright Brothers - South Kensington",
      location: "London, UK",
      URLname: "south_kensington",
      address: "",
      rating: "RatingFourAndHalf",
      description: "",
      imgURL: "assets/south_kensington.jpg"
    },
    {
      name: "Crab House All You Can Eat Seafood",
      location: "New York City, US",
      URLname: "crab_house",
      address: "",
      rating: "RatingFour",
      description: "",
      imgURL: "assets/crab_house.jpg"
    },
    {
      name: "Fog Harbor Fish House",
      location: "San Francisco, US",
      URLname: "fish_house",
      address: "",
      rating: "RatingFour",
      description: "",
      imgURL: "assets/fish_house.jpg"
    }
  ]

  return(
    <div>
      <Header />
      <h1 className="model-header">Restaurants</h1>

      {allRestaurants.map(restaurant => {
        return <RestaurantListing restaurant={restaurant} key={restaurant.name}/>
      })}
    </div>
  );
}

export default Restaurant;