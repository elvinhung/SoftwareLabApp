import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import '../styles/Location.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import RestaurantListing from "../components/RestaurantListing";
import HotelListing from "../components/HotelListing";
import Spinner from "react-bootstrap/Spinner";

const imgUrl = "https://maps.googleapis.com/maps/api/place/photo?";
const api_key = "AIzaSyBJ2lOAHkcMp6O6SpyeRNcQ0jtjLqGpZnE";

const LocationDetail = (props) => {
  const id = props.match.params.id;
  const [location, setLocation] = useState([]);

  // api call for location information
  function getLocation() {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/locations/' + id;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // runs upon initial render
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>
      <Header />
      {location.length !== 0 &&
        <div>
          <div className="instance_head">
              <div>
                <PhotoCarousel
                  image={imgUrl + 'maxwidth=' + location[0].photos[0].width + '&photoreference=' + location[0].photos[0].photo_reference + '&key=' + api_key}
                />
              </div>
              <div className="instance_head_info">
                <h1>{location[0].name}</h1>
                <p>Lat. {location[0].latitude}</p>
                <p>Long. {location[0].longitude}</p>
              </div>
            </div>
            <div className="instance-content-container">
              <div className="listing-container">
                <div className="information"><p>Nearby Restaurants</p></div>
                {location[0].restaurants.map((restaurant, i) => {
                  return (
                    <RestaurantListing key={i} restaurant={restaurant}/>
                  );
                })}
              </div>
              <div className="listing-container">
                <div className="information"><p>Nearby Hotels</p></div>
                {location[0].hotels.map((hotel, i) => {
                  return (
                    <HotelListing key={i} hotel={hotel} />
                  );
                })}
              </div>
            </div>
          </div>
        }
      {location.length === 0 &&
        <div align="center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      }
    </div>
  );
}

export default LocationDetail;