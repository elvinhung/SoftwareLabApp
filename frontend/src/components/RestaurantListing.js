import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Ratings from "../components/Ratings";
import '../styles/Restaurant.css';

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
            <Ratings rating = {props.restaurant.rating}/>
            <p>{props.restaurant.description}</p>
          </div>
        </div>
      </a>

    </div>
  );

}

export default RestaurantListing;