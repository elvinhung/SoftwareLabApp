import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/RestaurantDetail.css';
import '../styles/InstanceStyles.css';
import PhotoCarousel from "../components/PhotoCarousel";
import Review from "../components/Review";
import NearbyHotelListing from "../components/NearbyHotelListing";
import Loader from "../components/Loader";

const RestaurantDetail = (props) => {
  const id = props.match.params.id;
  const [restaurant, setRestaurant] = useState({});
  const [isLoading, setLoading] = useState(true);

  function getRestaurant() {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/restaurants/' + id;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setRestaurant((prevData) => {
          setLoading(false);
          return data;
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  useEffect(() => {
    getRestaurant();
  }, []);

  return(
    <div>
      <Header />
      {Object.keys(restaurant).length !== 0 && restaurant.hotels.sort(function(a, b){ return parseFloat(a.distance) - parseFloat(b.distance)}) &&

        <div>
          <div className="instance_head">
            <div className="header_image"><PhotoCarousel image={restaurant.image[0]}/></div>
            <div className="instance_head_info">
              <h2>{restaurant.name}</h2>
              <div className="location">
                <a className="location_link" href={"/locations/" + restaurant.location_id}>{restaurant.location_id}</a>
              </div>
              <div><Ratings rating={restaurant.stars[0]}/></div>
              <div><p>{restaurant.price}</p></div>
              <p>
                <i className="fa fa-map-marker contact"></i>
                {restaurant.address[0].join(', ')}
                <br />
                <i className="fa fa-phone contact"></i>{restaurant.contact}
              </p>
            </div>
          </div>
          <div className="res_info">
            <div className="res_left_info">
              <iframe className="map" frameBorder='0'
                      scrolling='no' marginHeight='0' marginWidth='0'
                      src={'https://maps.google.com/maps/embed/v1/place?q='+restaurant.address[0].join('+')+'&key=AIzaSyAY1pilCxM5qWgNJQCeiTPvqz5m2qiHE94'}>
              </iframe>
            </div>
            <div className="res_right_info">
              <Review review={restaurant.reviews.reviews[0]}/>
              <Review review={restaurant.reviews.reviews[1]}/>
              <Review review={restaurant.reviews.reviews[2]}/>
            </div>
          </div>
          <div className="nearby">
            <p align="center">Nearby Hotels</p>
            <div className="listing_container">
              {restaurant.hotels.map((hotel, index) => {
                return <NearbyHotelListing hotel={hotel} key={index}/>
              })}
            </div>
          </div>
        </div>
      }
      {isLoading && <Loader />}
      {!isLoading && Object.keys(restaurant).length === 0 &&
        <div className="error" align="center">
          <h1>Restaurant not found</h1>
        </div>
      }
    </div>
  );
}

export default RestaurantDetail;