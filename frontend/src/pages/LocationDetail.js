import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/InstanceStyles.css';
import PhotoCarousel from "../components/PhotoCarousel";
import PointOfInterest from "../components/PointOfInterest";
import Listing from "../components/Listing";
import Loader from "../components/Loader";
import POIMap from "../components/POIMap";
import ForecastCard from "../components/ForecastCard";
import InstanceGenerator from '../api/API';

const imgUrl = "https://maps.googleapis.com/maps/api/place/photo?";
const api_key = "AIzaSyBJ2lOAHkcMp6O6SpyeRNcQ0jtjLqGpZnE";

const LocationDetail = (props) => {
  const id = props.match.params.id;
  const [location, setLocation] = useState([]);
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="top-padding">
      <InstanceGenerator model={"locations"} setInstances={setLocation} setLoading={setLoading} query={'/' + id.toUpperCase()}/>
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
              <p><span className="bold">Country:</span> {location.weather.country}</p>
              <p><span className="bold">Population:</span> {location.population}</p>
              <p><span className="bold">Coordinates:</span> ({location.latitude}, {location.longitude})</p>
              <div className="forecast-card-container">
                <h4 className="forecast-title">Forecast</h4>
                <ForecastCard day={"Today"} temp={location.weather.week_forecast[0]}/>
                <ForecastCard day={"Tomorrow"} temp={location.weather.week_forecast[1]}/>
                <ForecastCard day={"2 Days"} temp={location.weather.week_forecast[2]}/>
              </div>
            </div>
          </div>
          <div className="model-container">
            <h3>Points of Interest</h3>
            <div className="poi-info-container">
              <div className="poi-left-info">
                <POIMap coords={[location.latitude, location.longitude]} poiList={location["points of interest"]}/>
              </div>
              <div className="listing_container poi-right-info">
                {location["points of interest"].map((poi, i) => {
                  return <PointOfInterest key={i} poi={poi}/>
                })}
              </div>
            </div>
            <br></br>
            <h3>Restaurants</h3>
            <div className="listing_container">
              {location.restaurants.map((restaurant, i) => {
                return (
                  <Listing key={i} type={"Restaurant"} instance={restaurant}/>
                );
              })}
            </div>
            <br></br>
            <h3>Hotels</h3>
            <div className="listing_container">
              {location.hotels.map((hotel, i) => {
                return (
                  <Listing key={i} type={"Hotel"} instance={hotel}/>
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