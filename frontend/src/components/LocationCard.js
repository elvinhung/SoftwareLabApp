import React from 'react';
import '../styles/LocationCard.css';

const LocationCard = (props) => {
  const {
    name,
    id,
  } = props.location;

  return (
    <a className="location-link" href={"/locations/" + id}>
      <div className="location-card">
        <div className="location-img-container">
          <img className="location-img" alt="temp" src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,f_auto,q_auto,w_250/v1582947101/MC_CSS_aw9xgq.png" />
        </div>
        <div className="location-name">
          <p>{name}</p>
        </div>
      </div>
    </a>
  );
};

export default LocationCard;