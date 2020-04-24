import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/InstanceStyles.css';
import PhotoCarousel from "../components/PhotoCarousel";
import PointOfInterest from "../components/PointOfInterest";
import RestaurantListing from "../components/RestaurantListing";
import HotelListing from "../components/HotelListing";
import Loader from "../components/Loader";
import Review from "../components/Review";
import POIMap from "../components/POIMap";

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
      location.restaurants.sort(function(a, b){ if (a.name[0] < b.name[0]) return -1; else return 1;}) &&
      location.hotels.sort(function(a, b){ if (a.name[0] < b.name[0]) return -1; else return 1;}) &&
        <div>
          <div className="instance_head">
            <div>
              <PhotoCarousel
                image1={imgUrl + 'maxwidth=' + location.photos[0].width + '&photoreference=' + location.photos[0].photo_reference + '&key=' + api_key}
                image2={imgUrl + 'maxwidth=' + location.photos[0].width + '&photoreference=' + location.photos[0].photo_reference + '&key=' + api_key}
                image3={imgUrl + 'maxwidth=' + location.photos[0].width + '&photoreference=' + location.photos[0].photo_reference + '&key=' + api_key}
              />
            </div>
            <div className="instance_head_info">
              <h1>{location.name}</h1>
              {<p><span className="bold">Country:</span> {location.weather.country}</p>}
              <p><span className="bold">Population:</span> {location.population}</p>
              <p><span className="bold">Coordinates:</span> ({location.latitude}, {location.longitude})</p>
              {<p><span className="bold">Weather:</span> {location.weather.current["current temp"]}</p>}
            </div>
          </div>
          <div className="model-container">
            <h3>Points of Interest</h3>
            <div className="poi-info-container">
              <div className="poi-left-info">
                <POIMap coords={[location.latitude, location.longitude]} poiList={location["points of interest"][0]["points of interest"]}/>
              </div>
              <div className="listing_container poi-right-info">
                {location['points of interest'][0]['points of interest'].map((poi, i) => {
                  return <PointOfInterest key={i} poi={poi}/>
                })}
              </div>
            </div>
            <br></br>
            <h3>Restaurants</h3>
            <div className="listing_container">
              {location.restaurants.map((restaurant, i) => {
                return (
                  <RestaurantListing key={i} restaurant={restaurant}/>
                );
              })}
            </div>
            <br></br>
            <h3>Hotels</h3>
            <div className="listing_container">
              {location.hotels.map((hotel, i) => {
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