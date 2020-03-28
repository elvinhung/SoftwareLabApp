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
  const [restaurant, setRestaurant] = useState({});

  function getRestaurant() {
    const apiUrl = 'http://nomad.eba-23hxbapp.us-east-2.elasticbeanstalk.com/restaurants/' + id;
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
      <Header />
      {Object.keys(restaurant).length !== 0 &&
        <div>
          <div className="instance_head">
            <div><PhotoCarousel image={restaurant.image[0]}/></div>
            <div className="instance_head_info">
              <h2>{restaurant.name}</h2>
              <div className="instance_location">
                <a className="location_link" href={"/locations/" + restaurant.location_id}>{restaurant.location_id}</a>
              </div>
              <div><Ratings rating={restaurant.stars[0]}/></div>
              <p>
                <i className="fa fa-map-marker contact"></i>
                {restaurant.address[0].join(', ')}
                <br />
                <i className="fa fa-phone contact"></i>{restaurant.contact}
              </p>
            </div>
          </div>
          <div className="information">
            <div className="left_info">
              <iframe width='600' height='400' frameBorder='0'
                      scrolling='no' marginHeight='0' marginWidth='0'
                      src={'https://maps.google.com/maps/embed/v1/place?q='+restaurant.address[0].join('+')+'&key=AIzaSyAY1pilCxM5qWgNJQCeiTPvqz5m2qiHE94'}>
              </iframe>
            </div>
            <div className="right_info">
              <p>{restaurant.description}</p>
            </div>
          </div>
          <div className="nearby">
            <p>Nearby Hotels</p>
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