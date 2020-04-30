import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import ModelPage from "../components/ModelPage";
import { LOCATIONS_API_URL } from '../api/API';

const Location = (props) => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const filters = queryString.parse(props.location.search);
  const query = props.location.search;

  function getLocations() {
    fetch(LOCATIONS_API_URL + query)
      .then((res) => res.json())
      .then((data) => {
        setLocations((prevData) => {
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
    setLocations([]);
    getLocations();
  },[props.location.search]);

  return <ModelPage model={"Location"} instances={locations} pagesAtTime={7} filters={filters} isLoading={isLoading}/>
}

export default withRouter(Location);