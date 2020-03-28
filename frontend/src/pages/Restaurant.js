import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import 'font-awesome/css/font-awesome.min.css';
import RestaurantListing from "../components/RestaurantListing";
import '../styles/ModelPage.css';

const Restaurant = () => {
  // const allRestaurants = [
  //   {
  //     name: "Wright Brothers - South Kensington",
  //     location: "London, UK",
  //     URLname: "south_kensington",
  //     address: "",
  //     rating: "RatingFourAndHalf",
  //     description: "",
  //     imgURL: "assets/south_kensington.jpg"
  //   },
  //   {
  //     name: "Crab House All You Can Eat Seafood",
  //     location: "New York City, US",
  //     URLname: "crab_house",
  //     address: "",
  //     rating: "RatingFour",
  //     description: "",
  //     imgURL: "assets/crab_house.jpg"
  //   },
  //   {
  //     name: "Fog Harbor Fish House",
  //     location: "San Francisco, US",
  //     URLname: "fish_house",
  //     address: "",
  //     rating: "RatingFour",
  //     description: "",
  //     imgURL: "assets/fish_house.jpg"
  //   }
  // ]

  const [restaurants, setRestaurants] = useState([]);

  function getRestaurants() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var apiUrl = 'http://nomad.eba-23hxbapp.us-east-2.elasticbeanstalk.com/restaurants';
      // replace url with our backend API + id
    fetch(proxyUrl + apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return(
    <div>
      <Header />
      <h1 className="model-header">Restaurants</h1>
      <div className="listing_container">
        {restaurants.map((restaurant, index) => {
          return <RestaurantListing restaurant={restaurant} key={index}/>
        })}
      </div>
    </div>
  );
}

export default Restaurant;