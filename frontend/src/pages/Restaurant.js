import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import RestaurantListing from "../components/RestaurantListing";
import '../styles/ModelPage.css';
import Spinner from "react-bootstrap/Spinner"
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Search from "../components/Search";
import queryString from "query-string";

const PAGE_SIZE = 12;

const Restaurant = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [curPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const filters = queryString.parse(props.location.search);


  function getRestaurants() {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/restaurants';
    fetch(apiUrl + props.location.search)
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
    getRestaurants();
  }, [props.location.search]);

  let restaurantsPage = [];
  for (let i = 0; i < restaurants.length; i += PAGE_SIZE) {
    restaurantsPage.push(restaurants.slice(i, i + PAGE_SIZE));
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return(
    <div>
      <Search type="Restaurant" filters={filters}/>
      {restaurants.length !== 0 &&
      restaurants.sort(function(a, b){ if (a.name[0] < b.name[0]) return -1; else return 1;}) &&
        <div className="model-container">
          <h1 className="model-header">Restaurants</h1>
          <div className="listing_padding">
            <div className="listing_container">
              {restaurantsPage[curPage - 1].map((restaurant, index) => {
                return <RestaurantListing restaurant={restaurant} key={index}/>
              })}
            </div>
          </div>
          {restaurants.length === 0 &&
          <div align="center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
          }
          <Pagination postsPerPage={PAGE_SIZE} totalPosts={restaurants.length} paginate={paginate} curPage={curPage} pagesAtTime={7}/>
          <p align="center"> Page {curPage} / {Math.ceil(restaurants.length / PAGE_SIZE)}</p>
        </div>
      }
      {isLoading && <Loader />}
      {!isLoading && restaurants.length === 0 &&
      <div className="error">
        <h1>No restaurants found</h1>
      </div>
      }
    </div>
  );
}

export default Restaurant;