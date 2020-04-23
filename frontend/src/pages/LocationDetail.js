import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/InstanceStyles.css';
import PhotoCarousel from "../components/PhotoCarousel";
import PointOfInterest from "../components/PointOfInterest";
import RestaurantListing from "../components/RestaurantListing";
import HotelListing from "../components/HotelListing";
import Loader from "../components/Loader";

const imgUrl = "https://maps.googleapis.com/maps/api/place/photo?";
const api_key = "AIzaSyBJ2lOAHkcMp6O6SpyeRNcQ0jtjLqGpZnE";

const LocationDetail = (props) => {
  const id = props.match.params.id;
  const [location, setLocation] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // api call for location information
  function getLocation() {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/locations/' + id.toUpperCase();
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setLocation((prevData) => {
          setLoading(false);
          return data;
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  // runs upon initial render
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="top-padding">
      {location.length !== 0 &&
      location[0].restaurants.sort(function(a, b){ if (a.name[0] < b.name[0]) return -1; else return 1;}) &&
      location[0].hotels.sort(function(a, b){ if (a.name[0] < b.name[0]) return -1; else return 1;}) &&
        <div>
          <div className="instance_head">
              <div>
                <PhotoCarousel
                  image1={imgUrl + 'maxwidth=' + location[0].photos[0].width + '&photoreference=' + location[0].photos[0].photo_reference + '&key=' + api_key}
                  image2={imgUrl + 'maxwidth=' + location[0].photos[0].width + '&photoreference=' + location[0].photos[0].photo_reference + '&key=' + api_key}
                  image3={imgUrl + 'maxwidth=' + location[0].photos[0].width + '&photoreference=' + location[0].photos[0].photo_reference + '&key=' + api_key}
                />
              </div>
              <div className="instance_head_info">
                <h1>{location[0].name}</h1>
                <p>Lat. {location[0].latitude}</p>
                <p>Long. {location[0].longitude}</p>
              </div>
            </div>
            <div className="model-container">
              <h3>Points of Interest</h3>
              <div className="listing_container">
                {location[0]["points of interest"][0]["points of interest"].map((poi, i) => {
                  return <PointOfInterest key={i} poi={poi}/>
                })}
              </div>
              <br></br>
              <h3>Restaurants</h3>
              <div className="listing_container">
                {location[0].restaurants.map((restaurant, i) => {
                  return (
                    <RestaurantListing key={i} restaurant={restaurant}/>
                  );
                })}
              </div>
              <br></br>
              <h3>Hotels</h3>
              <div className="listing_container">
                {location[0].hotels.map((hotel, i) => {
                  return (
                    <HotelListing key={i} hotel={hotel} />
                  );
                })}
              </div>
            </div>
          </div>
        }
      {isLoading && <Loader />}
      {!isLoading && location.length === 0 &&
      <div className="error" align="center">
        <h1>Location not found</h1>
      </div>
      }
    </div>
  );
}

export default withRouter(LocationDetail);