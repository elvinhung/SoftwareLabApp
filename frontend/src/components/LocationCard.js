import React from 'react';
import '../styles/LocationCard.css';

const LocationCard = (props) => {
  const {
    name,
    id,
    img,
  } = props.location;

  return (
    <a className="location-link" href={"/locations/" + id}>
      <div className="location-card">
        <div className="location-img-container">
          <img className="location-img" alt={name} src={img} />
        </div>
        <div className="location-name">
          <p>{name}</p>
        </div>
      </div>
    </a>
  );
};

export default LocationCard;