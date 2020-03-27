import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import '../styles/Location.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import RestaurantListing from "../components/RestaurantListing";
import HotelListing from "../components/HotelListing";


const locationInterface = {
  name: '',
  images: {
    img1: '',
    img2: '',
    img3: '',
  },
  lat: '',
  long: '',
  hotels: [],
  restaurants: [],
};

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

const LocationDetail = (props) => {
  const id = props.match.params.id;

  const [location, setLocation] = useState({});

  // flask api calls for location information
  function getLocation() {
    // replace url with our backend API + id
    fetch("https://api.github.com/repos/elvinhung/SoftwareLabApp/commits?per_page=1000")
      .then((res) => res.json())
      .then((data) => {
        //setLocation(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // runs upon initial render
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>
      <Header />
      <div className="instance_head">
        <div><PhotoCarousel images={location.images}/></div>
        <div className="instance_head_info">
          <h1>{location.name}</h1>
          <p>Lat. {location.lat}</p>
          <p>Long. {location.long}</p>
        </div>
      </div>
      <div className="instance-content-container">
        <div className="listing-container">
          <h3>Nearby Restaurants</h3>
          {location.restaurants.map(restaurant => {
            return (
              <RestaurantListing restaurant={restaurant}/>
            );
          })}
        </div>
        <div className="listing-container">
          <h3>Nearby Hotels</h3>
          {location.hotels.map(hotel => {
            return (
              <HotelListing hotel={hotel} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LocationDetail;