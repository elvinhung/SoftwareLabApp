import React from 'react';
import Header from "../components/Header";
import LocationCard from "../components/LocationCard";
import "../styles/Location.css";

const locationData = [
  {
    name: 'New York City',
    id: '',
  },
  {
    name: 'London',
    id: '',
  },
  {
    name: 'San Francisco',
    id: '',
  },
];

const Location = () => {
  return(
    <div>
      <Header />
      <div className="location-page-container">
        <div className="location-card-container">
          {locationData.map(location => (
            <LocationCard location={location} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Location;