import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from "query-string";
import ModelPage from "../components/ModelPage";
import { HOTELS_API_URL } from '../api/API';

const Hotel = (props) => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const filters = queryString.parse(props.location.search);
  const query = props.location.search;

  function getHotels() {
      fetch(HOTELS_API_URL + query)
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

  useEffect(() => {
    setLoading(true);
    setHotels([]);
    getHotels();
  }, [props.location.search]);

  return <ModelPage model={"Hotel"} instances={hotels} pagesAtTime={10} filters={filters} isLoading={isLoading}/>
}

export default withRouter(Hotel);