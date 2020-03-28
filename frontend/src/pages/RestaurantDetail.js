import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import HotelListing from "../components/HotelListing";
import Spinner from "react-bootstrap/Spinner";

const RestaurantDetail = (props) => {
  const id = props.match.params.id;
  const [restaurant, setRestaurant] = useState([]);

  function getRestaurant() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var apiUrl = 'http://nomad.eba-23hxbapp.us-east-2.elasticbeanstalk.com/restaurants/' + id;
    fetch(proxyUrl + apiUrl)
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
      <Header />
      {restaurant.length !== 0 &&
        <div>
          <div className="instance_head">
            <div><PhotoCarousel image={restaurant[0].image[0]}/></div>
            <div className="instance_head_info">
              <h2>{restaurant[0].name}</h2>
              <div className="instance_location">
                <a className="location_link" href={"/locations/" + restaurant[0].location_id}>{restaurant[0].location_id}</a>
              </div>
              <div><Ratings rating={restaurant[0].stars[0]}/></div>
              <p>
                <i className="fa fa-map-marker contact"></i>
                {restaurant[0].address[0].join(', ')}
                <br />
                <i className="fa fa-phone contact"></i>{restaurant[0].contact}
              </p>
            </div>
          </div>
          <div className="information">
            <p>Nearby Hotels </p>
          </div>
        </div>
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

export default RestaurantDetail;