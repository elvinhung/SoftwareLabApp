import React from 'react';
import * as rating from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../App.css'
import fitzrovia from "../attendant_fitzrovia.jpg";

const RestaurantListing = (props) => {
  return(
    <div>

      <a href={"/restaurants/" + props.restaurant.URLname}>
        <div className="instance">
          <div>
            <img className="instance_img" src={require("../" + props.restaurant.imgURL)} alt={props.restaurant.name}/>
          </div>
          <div className="instance_page_info">
            <h2>{props.restaurant.name}</h2>
            <rating.RatingFourAndHalf/>
            <p>{props.restaurant.description}</p>
          </div>
        </div>
      </a>

    </div>
  );

}

export default RestaurantListing;