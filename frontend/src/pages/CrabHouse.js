import React from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import HotelListing from "../components/HotelListing";

const CrabHouse = () => {
  const images = {
    img1: "assets/crab_house.jpg",
    img2: "assets/crab_house.jpg",
    img3: "assets/crab_house.jpg"
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

  return(
    <div>
      <Header />

      <div class="instance_head">

        <div><PhotoCarousel images={images}/></div>
        <div class="instance_head_info">
          <h2>Crab House All You Can Eat Seafood</h2>

          <div className="instance_location">
            <a className="location_link" href={"/locations/nyc"}>{"New York City, US"}</a>
          </div>
          <div><Ratings rating={"RatingFour"}/></div>

          <p></p>
          <p>
            <i className="fa fa-map-marker contact"></i> 135 E 55th St, New York, NY 10022 <br></br>
            <i className="fa fa-phone contact"></i> (212) 392-6400
          </p>
        </div>
      </div>

      <div className="information listing_container">
        <p>Hotels nearby: </p>
        <HotelListing hotel={allHotels}/>
      </div>
    </div>
  );
}

export default CrabHouse;