import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import LocationCard from "../components/LocationCard";
import "../styles/Location.css";


const Location = () => {
  const [locations, setLocations] = useState([]);

  function getLocations() {
    // replace url with our backend API + id
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        //setLocations(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    //getLocations();
  },[]);

  return(
    <div>
      <Header />
      <h1 className="model-header">Locations</h1>
      <div className="location-page-container">
        <div className="location-card-container">
          {locations.map(location => (
            <LocationCard key={location.id} location={location} />
          ))}
          {locations.length === 0 &&
            <div>
              No locations found
            </div>
          }
        </div>

      </div>
    </div>
  );
}

export default Location;