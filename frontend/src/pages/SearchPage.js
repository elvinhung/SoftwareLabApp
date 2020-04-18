import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LocationCard from "../components/LocationCard";
import "../styles/Location.css";
import "../styles/ModelPage.css";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Search from "../components/Search";
import HotelListing from "../components/HotelListing";
import RestaurantListing from "../components/RestaurantListing";

const MAX_RESULTS = 4;

const SearchPage = () => {
  const [locations, setLocations] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const query = new URLSearchParams(window.location.search).get('q');

  function getLocations() {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/locations';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setLocations((prevData) => {
          setLoading(false);
          return data;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getHotels() {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/hotels';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setHotels((prevData) => {
          setLoading(false);
          return data;
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  function getRestaurants() {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/restaurants';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setRestaurants((prevData) => {
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
    getLocations();
    getHotels();
    getRestaurants();
  },[]);

  let topResults = [];
  topResults.push(locations.slice(0, MAX_RESULTS));
  topResults.push(hotels.slice(0, MAX_RESULTS));
  topResults.push(restaurants.slice(0, MAX_RESULTS));

  return(
    <div>
      <div className="form-container">
        <form className="search-form" action="/search?">
          <input name="q" id="textSearch" className="search-bar" defaultValue={query} type="text"/>
          <button type="submit" className="search-btn"><i className="fa fa-search"></i></button>
        </form>
      </div>
      {locations.length !== 0 &&
      locations.sort(function(a, b){ if (a.name[0] < b.name[0]) return -1; else return 1;}) &&
      <div className="model-container">
        <div className="header-info">
          <h1 className="search-header">Locations</h1>
          <a className="see_more" href={"/locations?q=" + query}>More Locations <i className="fa fa-angle-double-right"></i></a>
        </div>
        <div>
          <div className="location-page-container">
            <div className="location-card-container">
              {topResults[0].map(location => (
                <LocationCard key={location._id} location={location} />
              ))}
            </div>
          </div>
        </div>
        <div className="header-info">
          <h1 className="search-header">Hotels</h1>
          <a className="see_more" href={"/hotels?q=" + query}>More Hotels <i className="fa fa-angle-double-right"></i></a>
        </div>
        <div className="listing_padding">
          <div className="listing_container">
            {topResults[1].map((hotel, index) => {
              return <HotelListing hotel={hotel} key={index}/>
            })}
          </div>
        </div>
        <div className="header-info">
          <h1 className="search-header">Restaurants</h1>
          <a className="see_more" href={"/restaurants?q=" + query}>More Restaurants <i className="fa fa-angle-double-right"></i></a>
        </div>
        <div className="listing_padding">
          <div className="listing_container">
            {topResults[2].map((restaurant, index) => {
              return <RestaurantListing restaurant={restaurant} key={index}/>
            })}
          </div>
        </div>
      </div>
      }
      {isLoading && <Loader />}
      {!isLoading && locations.length === 0 &&
      <div className="error" align="center">
        <h1>No results found</h1>
      </div>
      }
    </div>
  );
}

export default SearchPage;