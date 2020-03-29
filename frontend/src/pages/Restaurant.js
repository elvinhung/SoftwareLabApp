import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import 'font-awesome/css/font-awesome.min.css';
import RestaurantListing from "../components/RestaurantListing";
import '../styles/ModelPage.css';
import Spinner from "react-bootstrap/Spinner"


const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  function getRestaurants() {
    const apiUrl = 'http://nomad.eba-23hxbapp.us-east-2.elasticbeanstalk.com/restaurants';
    fetch(apiUrl)
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
      {restaurants.length === 0 &&
        <div align="center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      }
    </div>
  );
}

export default Restaurant;