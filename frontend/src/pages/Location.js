import React from 'react';
import Header from "../components/Header";
import LocationCard from "../components/LocationCard";
import "../styles/Location.css";
import nyc from '../assets/nyc.jpg';
import sf from '../assets/sf.jpg';
import ldn from '../assets/ldn.jpg';

const locationData = [
  {
    name: 'New York',
    id: 'nyc',
    img: nyc,
  },
  {
    name: 'London',
    id: 'ldn',
    img: ldn,
  },
  {
    name: 'San Francisco',
    id: 'sf',
    img: sf,
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