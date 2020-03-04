import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Ratings from "../components/Ratings";
import '../styles/Restaurant.css';

const HotelListing = (props) => {
  return(
    <div>

      <a href={"/hotel/" + props.hotel.URLname}>
        <div className="instance">
          <div>
            <img className="instance_img" src={require("../" + props.hotel.imgURL)} alt={props.hotel.name}/>
          </div>
          <div className="instance_page_info">
            <h2>{props.hotel.name}</h2>
            <Ratings rating = {props.hotel.rating}/>
            <p>{props.hotel.description}</p>
          </div>
        </div>
      </a>

    </div>
  );

}

export default HotelListing;