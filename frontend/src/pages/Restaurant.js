import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import 'font-awesome/css/font-awesome.min.css';
import RestaurantListing from "../components/RestaurantListing";
import '../styles/ModelPage.css';
import Spinner from "react-bootstrap/Spinner"
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";


const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [curPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(true);

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
    getRestaurants();
  }, []);

  var restaurantsPage = []
  for (let i = 0; i < 60; i+=10) {
    restaurantsPage.push(restaurants.slice(i, i + 10));
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return(
    <div>
      <Header />
      {restaurants.length !== 0 &&
        <div>
          <h1 className="model-header">Restaurants</h1>
          <div className="listing_container">
            {restaurantsPage[curPage - 1].map((restaurant, index) => {
              return <RestaurantListing restaurant={restaurant} key={index}/>
            })}
          </div>
          {restaurants.length === 0 &&
          <div align="center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
          }
          <Pagination postsPerPage={10} totalPosts={60} paginate={paginate}/>
          <p align="center"> Page {curPage}</p>
        </div>
      }
      {isLoading && <Loader />}
      {!isLoading && restaurants.length === 0 &&
      <div className="center" align="center">
        <h1>No restaurants found</h1>
      </div>
      }
    </div>
  );
}

export default Restaurant;