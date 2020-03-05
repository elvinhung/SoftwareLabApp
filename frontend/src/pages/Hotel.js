import React from 'react';
import Header from "../components/Header";
import 'font-awesome/css/font-awesome.min.css';
import HotelListing from "../components/HotelListing";
import '../styles/ModelPage.css';

const Hotel = () => {
  const allHotels = [
    {
      name: "The Hoxton Holborn",
      location: "London, UK",
      URLname: "hoxton_holborn",
      address: "",
      rating: "RatingTwo",
      description: "",
      imgURL: "assets/hoxton_holborn.jpg"
    },
    {
      name: "The Leon Hotel",
      location: "New York City, US",
      URLname: "leon_hotel",
      address: "",
      rating: "RatingFour",
      description: "",
      imgURL: "assets/leon_hotel.jpg"
    },
    {
      name: "Fairmont Heritage Place - Ghirardelli Square",
      location: "San Francisco, US",
      URLname: "fairmont_heritage",
      address: "",
      rating: "RatingFive",
      description: "",
      imgURL: "assets/fairmont_heritage.jpg"
    }
  ]

  return(
    <div>
      <Header />
      <h1 className="model-header">Hotels</h1>

      <div className="listing_container">
        {allHotels.map(hotel => {
          return <HotelListing hotel={hotel} key={hotel.name}/>
        })}
      </div>
    </div>
  );
}

export default Hotel;