import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import LocationCard from "../components/LocationCard";
import "../styles/Location.css";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Search from "../components/Search";

const PAGE_SIZE = 12;

const Location = (props) => {
  const [locations, setLocations] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const filters = queryString.parse(props.location.search);

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

  useEffect(() => {
    getLocations();
  },[props.location.search]);

  let locationPages = [];
  for (let i = 0; i < locations.length; i += PAGE_SIZE) {
    locationPages.push(locations.slice(i, i + PAGE_SIZE));
  }

  const paginate = (pageNumber) => setCurrPage(pageNumber);

  return(
    <div>
      <Search type="Location" filters={filters} />
      {locations.length !== 0 &&
      locations.sort(function(a, b){ if (a.name[0] < b.name[0]) return -1; else return 1;}) &&
        <div className="model-container">
          <h1 className="model-header">Locations</h1>
          <div>
            <div className="location-page-container">
              <div className="location-card-container">
                {locationPages[currPage - 1].map(location => (
                  <LocationCard key={location._id} location={location} />
                ))}
              </div>
            </div>
            <Pagination postsPerPage={PAGE_SIZE} totalPosts={locations.length} paginate={paginate} curPage={currPage} pagesAtTime={5}/>
            <p align="center"> Page {currPage} / {Math.ceil(locations.length / PAGE_SIZE)}</p>
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

export default Location;