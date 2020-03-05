import React from 'react';
import Header from "../components/Header";
import LocationCard from "../components/LocationCard";
import "../styles/Location.css";

const locationData = [
  {
    name: 'New York',
    id: 'nyc',
  },
  {
    name: 'London',
    id: 'ldn',
  },
  {
    name: 'San Francisco',
    id: 'sf',
  },
];

const Location = () => {
  return(
    <div>
      <Header />
      <h1 align="center" className="location-header">Locations</h1>
      <div className="location-page-container">
        <div className="location-card-container">
          {locationData.map(location => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Location;