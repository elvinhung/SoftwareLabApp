import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import RestaurantListing from "../components/RestaurantListing";
import Spinner from "react-bootstrap/Spinner";
import { title } from '../Utils';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import HotelListing from "../components/HotelListing";
import NearbyRestaurantListing from "../components/NearbyRestaurantListing";

const mapStyle = {
  width: '25vw',
  height: '25vh'
}

const HotelDetail = (props) => {
  const id = props.match.params.id;
  const [hotel, setHotel] = useState({});
  const [address, setAddress] = useState("");

  function getHotel() {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/hotels/' + id;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setHotel(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (Object.keys(hotel).length !== 0) {
      const { address } = hotel;
      setAddress(title(address.lines[0]) + ', ' + title(address.cityName) + ', ' + address.stateCode + ' ' + address.postalCode);
    }
  }, [hotel]);

  useEffect(() => {
    getHotel();
  }, []);

  return(
    <div>
      <Header />
      {Object.keys(hotel).length !== 0 && hotel.restaurants.sort(function(a, b){ return parseFloat(a.distance) - parseFloat(b.distance)}) &&
        <div>
          <div className="instance_head">
            <div><PhotoCarousel image={hotel.image}/></div>
            <div className="instance_head_info">
              <h2>{hotel.name}</h2>
              <div className="instance_location">
                <a className="location_link" href={"/locations/" + hotel.location_id}>{hotel.location_id}</a>
              </div>
              <div><Ratings rating={hotel.stars}/></div>
              <p>
                <i className="fa fa-map-marker contact"></i>{address}
                <br/>
                <i className="fa fa-phone contact"></i>{hotel.contact.phone}
              </p>
            </div>
          </div>
          <div className="information">
            <div className="left_info">
              <iframe width='600' height='400' frameBorder='0'
                      scrolling='no' marginHeight='0' marginWidth='0'
                      src={'https://maps.google.com/maps/embed/v1/place?q='+address+'&key=AIzaSyAY1pilCxM5qWgNJQCeiTPvqz5m2qiHE94'}>
              </iframe>
            </div>
            <div className="right_info">
              <p>{hotel.description}</p>
            </div>
          </div>
          <div className="nearby">
            <p align="center">Nearby Restaurants</p>
            <div className="listing_container">
              {hotel.restaurants.map((restaurant, index) => {
                return <NearbyRestaurantListing restaurant={restaurant} key={index}/>
              })}
            </div>
          </div>
        </div>
      }
      {Object.keys(hotel).length === 0 &&
        <div align="center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      }

    </div>
  );
}

export default HotelDetail;