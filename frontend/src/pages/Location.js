import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Listing from "../components/Listing";
import "../styles/Location.css";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Search from "../components/Search";
import { LOCATIONS_API_URL } from '../api/API';

const PAGE_SIZE = 12;

const Location = (props) => {
  const [locations, setLocations] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const filters = queryString.parse(props.location.search);
  const query = props.location.search;

  function getLocations() {
    // const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/locations';
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

  let locationPages = [];
  for (let i = 0; i < locations.length; i += PAGE_SIZE) {
    locationPages.push(locations.slice(i, i + PAGE_SIZE));
  }

  const paginate = (pageNumber) => setCurrPage(pageNumber);
  const totalPages = Math.ceil(locations.length / PAGE_SIZE);

  return(
    <div>
      <Search type="Location" filters={filters} paginate={paginate}/>
      {locations.length !== 0 &&
        <div className="model-container">
          <h1 className="model-header">Locations</h1>
          <div>
            <div className="location-page-container">
              <div className="location-card-container">
                {locationPages[currPage - 1].map(location => (
                  <Listing key={location.location_id} type={"Location"} instance={location} />
                ))}
              </div>
            </div>
            <Pagination postsPerPage={PAGE_SIZE} totalPosts={locations.length} paginate={paginate} curPage={currPage} pagesAtTime={(totalPages >= 7 ? 7 : totalPages)}/>
            <p align="center"> Page {currPage} / {totalPages}</p>
          </div>
        </div>
      }
      {isLoading && <Loader />}
      {!isLoading && locations.length === 0 &&
        <div className="error" align="center">
          <h1>No locations found</h1>
        </div>
      }
    </div>
  );
}

export default withRouter(Location);