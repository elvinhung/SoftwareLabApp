import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import LocationCard from "../components/LocationCard";
import "../styles/Location.css";
import Pagination from "../components/Pagination";
import Spinner from "react-bootstrap/Spinner";

const PAGE_SIZE = 3;

const Location = () => {
  const [locations, setLocations] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  function getLocations() {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/locations';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getLocations();
  },[]);

  let locationPages = [];
  for (let i = 0; i < locations.length; i += PAGE_SIZE) {
    locationPages.push(locations.slice(i, i + PAGE_SIZE));
  }

  const paginate = (pageNumber) => setCurrPage(pageNumber);

  return(
    <div>
      <Header />
      <h1 className="model-header">Locations</h1>
      {locations.length !== 0 &&
        <div>
          <div className="location-page-container">
            <div className="location-card-container">
              {locationPages[currPage - 1].slice(0,3).map(location => (
                <LocationCard key={location._id} location={location} />
              ))}
            </div>
          </div>
          <Pagination postsPerPage={PAGE_SIZE} totalPosts={locations.length} paginate={paginate} />
        </div>
      }
      {locations.length === 0 &&
        <div align="center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      }
    </div>
  );
}

export default Location;