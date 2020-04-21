import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import LocationCard from "../components/LocationCard";
import "../styles/Location.css";
import "../styles/ModelPage.css";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Search from "../components/Search";
import HotelListing from "../components/HotelListing";
import RestaurantListing from "../components/RestaurantListing";

const MAX_RESULTS = 4;

const SearchPage = (props) => {
  const [locations, setLocations] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const query = props.location.search;
  const filters = queryString.parse(props.location.search);

  function getLocations() {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/locations';
    fetch(apiUrl + query)
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
    fetch(apiUrl + query)
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
    fetch(apiUrl + query)
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
    setLocations([]);
    setHotels([]);
    setRestaurants([]);
    getLocations();
    getHotels();
    getRestaurants();
  },[props.location.search]);

  let topResults = [];
  topResults.push(locations.slice(0, MAX_RESULTS));
  topResults.push(hotels.slice(0, MAX_RESULTS));
  topResults.push(restaurants.slice(0, MAX_RESULTS));

  const paginate = (pageNumber) => (pageNumber);

  return(
    <div>
      <Search type="All" filters={filters} paginate={paginate}/>
      <div className="model-container">
      {locations.length !== 0 && locations.sort(function(a, b){ if (a.name[0] < b.name[0]) return -1; else return 1;}) &&
        <div>
          <div className="header-info">
            <h1 className="search-header">Locations</h1>
            <a className="see_more" href={"/locations" + query}>More Locations <i className="fa fa-angle-double-right"></i></a>
          </div>
          <div className="location-page-container">
            <div className="location-card-container">
              {topResults[0].map(location => (
                <LocationCard key={location._id} location={location} />
              ))}
            </div>
          </div>
        </div>
      }
      {hotels.length !== 0 &&
        <div>
          <div className="header-info">
            <h1 className="search-header">Hotels</h1>
            <a className="see_more" href={"/hotels" + query}>More Hotels <i className="fa fa-angle-double-right"></i></a>
          </div>
          <div className="listing_container">
            {topResults[1].map((hotel, index) => {
              return <HotelListing hotel={hotel} key={index}/>
            })}
          </div>
        </div>
      }
      {restaurants.length !== 0 &&
        <div>
          <div className="header-info">
            <h1 className="search-header">Restaurants</h1>
            <a className="see_more" href={"/restaurants" + query}>More Restaurants <i className="fa fa-angle-double-right"></i></a>
          </div>
          <div className="listing_container">
            {topResults[2].map((restaurant, index) => {
              return <RestaurantListing restaurant={restaurant} key={index}/>
            })}
          </div>
        </div>
      }
      </div>
      {isLoading && <Loader />}
      {!isLoading &&
        locations.length === 0 &&
        restaurants.length === 0 &&
        hotels.length === 0 &&
        <div className="error">
          <h1>No results found</h1>
        </div>
      }
    </div>
  );
}

export default SearchPage;