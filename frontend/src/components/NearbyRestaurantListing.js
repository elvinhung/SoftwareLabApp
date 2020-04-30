import React, { useState } from 'react';
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/Listings.css';
import Spinner from "react-bootstrap/Spinner";
import TagList from "./TagList";
import InstanceGenerator from "../api/API";

const NearbyRestaurantListing = (props) => {
  const id = props.restaurant.id.$oid;
  const [restaurant, setRestaurant] = useState({});
  const [isLoading, setLoading] = useState(true);

  const cuisine = restaurant.tags;
  let tags = [];

  tags.push(props.restaurant.distance + " away")
  if (Object.keys(restaurant).length !== 0) {
    let priceDollars = "";
    for (let i = 0; i < restaurant.priceStr.length; i++) {
      priceDollars += "$";
    }
    tags.push(priceDollars);
    for (let i = 0; i < cuisine[0].length; i++) {
      tags.push(cuisine[0][i].title);
    }
  }

  return(
    <div>
      <InstanceGenerator model={"restaurants"} setInstances={setRestaurant} setLoading={setLoading} query={'/' + id}/>
      {Object.keys(restaurant).length !== 0 &&
        <a className="listing" href={"/restaurants/" + id}>
          <div className="instance">
            <div className="img_container">
              <img className="instance_img" src={restaurant.images[0][0]} alt={restaurant.name[0]}/>
            </div>
            <div >
              <h4 className="instance_name">{restaurant.name[0]}</h4>
            </div>
            <div className="instance_page_info">
              <p className="instance_location">{restaurant.cityName + ", " + restaurant.countryCode}</p>
              <Ratings rating={restaurant.stars[0]}/>
              <TagList className="tag_list_container" tags={tags}/>
            </div>
          </div>
        </a>
      }
      {restaurant.length === 0 &&
        <div align="center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      }
    </div>
  );
}

export default NearbyRestaurantListing;