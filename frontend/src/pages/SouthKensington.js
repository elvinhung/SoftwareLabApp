import React from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import HotelListing from "../components/HotelListing";

const SouthKensington = () => {
  const images = {
    img1: "assets/south_kensington.jpg",
    img2: "assets/south_kensington.jpg",
    img3: "assets/south_kensington.jpg"
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

  return(
    <div>
      <Header />

      <div class="instance_head">

        <div><PhotoCarousel images={images}/></div>
        <div class="instance_head_info">
          <h2>Wright Brothers - South Kensington</h2>

          <div className="instance_location">
            <a className="location_link" href={"/locations/ldn"}>{"London, UK"}</a>
          </div>
          <div><Ratings rating={"RatingFourAndHalf"}/></div>

          <p></p>
          <p>
            <i className="fa fa-map-marker contact"></i> 56 Old Brompton Road, London SW7 3DY, United Kingdom <br></br>
            <i className="fa fa-phone contact"></i> 44 20 7581 0131
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

export default SouthKensington;