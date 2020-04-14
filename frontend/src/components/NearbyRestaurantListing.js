import React, { useState, useEffect } from 'react';
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/Listings.css';
import Spinner from "react-bootstrap/Spinner";

const NearbyRestaurantListing = (props) => {
  const id = props.restaurant.id.$oid;
  const [restaurant, setRestaurant] = useState({});

  function getRestaurant() {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/restaurants/' + id;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setRestaurant(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getRestaurant();
  }, []);

  return(
    <div>
      {Object.keys(restaurant).length !== 0 &&
        <a className="listing" href={"/restaurants/" + id}>
          <div className="instance">
            <div className="img_container">
              <img className="instance_img" src={restaurant.image[0]} alt={restaurant.name[0]}/>
            </div>

            <div className="instance_name">
              <h4>{restaurant.name[0] + " (" + restaurant.price + ")"}</h4>
            </div>
            <div className="instance_page_info">
              <div className="instance_location"><p>{(restaurant.address[0][restaurant.address[0].length - 1]).substring(0, (restaurant.address[0][restaurant.address[0].length - 1]).length - 6)}</p></div>
              <div><Ratings rating={restaurant.stars[0]}/></div>
              <div className="distance"><p>{props.restaurant.distance + " away"}</p></div>
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