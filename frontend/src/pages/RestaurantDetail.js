import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/RestaurantDetail.css';
import '../styles/InstanceStyles.css';
import PhotoCarousel from "../components/PhotoCarousel";
import Review from "../components/Review";
import NearbyHotelListing from "../components/NearbyHotelListing";
import Loader from "../components/Loader";
import TagList from "../components/TagList";
import { title } from '../Utils';

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

  const cuisine = restaurant.tags;
  let tags = [];
  let services = [];

  if (Object.keys(restaurant).length !== 0) {
    let priceDollars = "";
    for (let i = 0; i < restaurant.priceStr.length; i++)
      priceDollars += "$";
    tags.push(priceDollars);
    for (let i = 0; i < cuisine[0].length; i++)
      tags.push(cuisine[0][i].title);
    for (let i = 0; i < restaurant.transactions.length; i++)
      services.push(title(restaurant.transactions[i]));
    if (restaurant.address.length === 0)
      restaurant.contact = "N/A";
    if (restaurant.contact.length === 0)
      restaurant.contact = "N/A";
    if (services.length === 0)
      services.push("N/A");
  }

  return(
    <div className="top-padding">
      {Object.keys(restaurant).length !== 0 &&
      restaurant.hotels.sort(function(a, b){ return parseFloat(a.distance) - parseFloat(b.distance)}) &&

        <div>
          <div className="instance_head">
            <div className="header_image"><PhotoCarousel image1={restaurant.images[0][0]} image2={restaurant.images[0][1]} image3={restaurant.images[0][2]}/></div>
            <div className="instance_head_info">
              <h1>{restaurant.name}</h1>
              <div className="location">
                <a className="location_link" href={"/locations/" + restaurant.location_id.toLowerCase()}>{(restaurant.address[0][restaurant.address[0].length - 1]).substring(0, (restaurant.address[0][restaurant.address[0].length - 1]).length - 6)}</a>
              </div>
              <Ratings rating={restaurant.stars[0]}/>
              <TagList className="tag_list_container" tags={tags}/>
              <p>
                <i className="fa fa-map-marker contact"></i> {restaurant.address[0].join(', ')}
                <br />
                <br />
                <i className="fa fa-phone contact"></i> {restaurant.contact}
                <br />
                <br />
                <i className="fa fa-external-link"></i> <a className="weblink" href={restaurant.link}> Website </a>
              </p>
              <p classname="transactions_offered"> Services Offered: <TagList classname="tag_list_container" tags={services}/></p>
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
          <div className="model-container">
            <h3>Nearby Hotels</h3>
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

export default withRouter(RestaurantDetail);