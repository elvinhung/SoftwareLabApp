import React from 'react';
import Header from "../components/Header";
import 'font-awesome/css/font-awesome.min.css';
import RestaurantListing from "../components/RestaurantListing";
import '../styles/Restaurant.css';

const Restaurant = () => {
  const allRestaurants = [
    {
      name: "Katz's Delicatessen",
      URLname: "katz's_delicatessen",
      address: "",
      rating: "RatingFourAndHalf",
      description: "No-frills deli with theatrically cranky service serving mile-high sandwiches since 1888.",
      imgURL: "assets/katz's_delicatessen.jpg"
    },
    {
      name: "Attendant Fitzrovia",
      URLname: "attendant_fitzrovia",
      address: "",
      rating: "RatingFourAndHalf",
      description: "Tiny, quirky coffee bar in restored Victorian public convenience, serving breakfast and light lunch.",
      imgURL: "assets/attendant_fitzrovia.jpg"
    },
    {
      name: "Roxie Food Center",
      URLname: "roxie_food_center",
      address: "",
      rating: "RatingFive",
      description: "Easygoing canteen with a welcoming atmosphere specializing in hearty deli sandwiches.",
      imgURL: "assets/roxie_food_center.jpg"
    }
  ]

  return(
    <div>
      <Header />
      <h1 className="restaurant-header">Restaurants</h1>

      {allRestaurants.map(restaurant => {
        return <RestaurantListing restaurant={restaurant} key={restaurant.name}/>
      })}
    </div>
  );
}

export default Restaurant;