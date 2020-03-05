import React from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import RestaurantListing from "../components/RestaurantListing";

const LeonHotel = () => {
  const images = {
    img1: "assets/leon_hotel.jpg",
    img2: "assets/leon_hotel.jpg",
    img3: "assets/leon_hotel.jpg"
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

  return(
    <div>
      <Header />

      <div class="instance_head">

        <div><PhotoCarousel images={images}/></div>
        <div class="instance_head_info">
          <h2>The Leon Hotel</h2>

          <div className="instance_location">
            <a className="location_link" href={"/locations/nyc"}>{"New York City, US"}</a>
          </div>
          <div><Ratings rating={"RatingFour"}/></div>

          <p></p>
          <p>
            <i className="fa fa-map-marker contact"></i> 121 Canal Street, New York, NY 10002 <br></br>
          </p>
        </div>
      </div>

      <div className="information listing_container">
        <p>Restaurants nearby: </p>
        <RestaurantListing restaurant={allRestaurants}/>
      </div>
    </div>
  );
}

export default LeonHotel;