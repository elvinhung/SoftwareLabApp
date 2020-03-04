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
      rating: "RatingFour",
      description: "",
      imgURL: "assets/katz's_delicatessen.jpg"
    },
    {
      name: "The Leon Hotel",
      location: "New York City, US",
      URLname: "leon_hotel",
      address: "",
      rating: "RatingFour",
      description: "",
      imgURL: "assets/attendant_fitzrovia.jpg"
    },
    {
      name: "The Westgate Hotel",
      location: "San Francisco, US",
      URLname: "west_gate",
      address: "",
      rating: "RatingFour",
      description: "",
      imgURL: "assets/roxie_food_center.jpg"
    }
  ]

  return(
    <div>
      <Header />
      <h1 className="model-header">Hotels</h1>

      {allHotels.map(hotel => {
        return <HotelListing hotel={hotel} key={hotel.name}/>
      })}
    </div>
  );
}

export default Hotel;