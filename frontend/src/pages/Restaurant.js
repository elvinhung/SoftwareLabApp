import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from "query-string";
import ModelPage from "../components/ModelPage";
import { RESTAURANTS_API_URL } from "../api/API";

const Restaurant = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const filters = queryString.parse(props.location.search);
  const query = props.location.search;

  function getRestaurants() {
    fetch(RESTAURANTS_API_URL + query)
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
    setLoading(true);
    setRestaurants([]);
    getRestaurants();
  }, [props.location.search]);

  return <ModelPage model={"Restaurant"} instances={restaurants} pagesAtTime={10} filters={filters} isLoading={isLoading}/>
}

export default withRouter(Restaurant);