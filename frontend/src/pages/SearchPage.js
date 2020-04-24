import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import LocationCard from "../components/LocationCard";
import "../styles/Location.css";
import "../styles/ModelPage.css";
import Loader from "../components/Loader";
import Search from "../components/Search";
import HotelListing from "../components/HotelListing";
import RestaurantListing from "../components/RestaurantListing";

const MAX_RESULTS = 4;
const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com';
const defaultData = {
  locations: [],
  restaurants: [],
  hotels: [],
};

const SearchPage = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(defaultData);

  const query = props.location.search;
  const filters = queryString.parse(props.location.search);

  function search() {
    fetch(apiUrl + '/search' + query)
      .then((res) => res.json())
      .then((data) => {
        setData((prevData) => {
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
    setData(defaultData);
    search();
  },[props.location.search]);

  const paginate = (pageNumber) => (pageNumber);

  return(
    <div>
      <Search type="All" filters={filters} paginate={paginate}/>
      <div className="model-container">
      {data.locations.length !== 0 &&
        <div>
          <div className="header-info">
            <h1 className="search-header">Locations</h1>
            <a className="see_more" href={"/locations" + query}>More Locations <i className="fa fa-angle-double-right"></i></a>
          </div>
          <div className="location-page-container">
            <div className="location-card-container">
              {data.locations.slice(0, MAX_RESULTS).map(location => {
                return <LocationCard key={location.location_id} location={location}/>
              })}
            </div>
          </div>
        </div>
      }
      {data.hotels.length !== 0 &&
        <div>
          <div className="header-info">
            <h1 className="search-header">Hotels</h1>
            <a className="see_more" href={"/hotels" + query}>More Hotels <i className="fa fa-angle-double-right"></i></a>
          </div>
          <div className="listing_container">
            {data.hotels.slice(0, MAX_RESULTS).map((hotel, index) => {
              return <HotelListing hotel={hotel} key={index}/>
            })}
          </div>
        </div>
      }
      {data.restaurants.length !== 0 &&
        <div>
          <div className="header-info">
            <h1 className="search-header">Restaurants</h1>
            <a className="see_more" href={"/restaurants" + query}>More Restaurants <i className="fa fa-angle-double-right"></i></a>
          </div>
          <div className="listing_container">
            {data.restaurants.slice(0, MAX_RESULTS).map((restaurant, index) => {
              return <RestaurantListing restaurant={restaurant} key={index}/>
            })}
          </div>
        </div>
      }
      </div>
      {isLoading && <Loader />}
      {!isLoading &&
        data.locations.length === 0 &&
        data.restaurants.length === 0 &&
        data.hotels.length === 0 &&
        <div className="error">
          <h1>No results found</h1>
        </div>
      }
    </div>
  );
}

export default withRouter(SearchPage);