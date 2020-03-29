import React from 'react';
import '../styles/LocationCard.css';

const imgUrl = "https://maps.googleapis.com/maps/api/place/photo?";
const api_key = "AIzaSyBJ2lOAHkcMp6O6SpyeRNcQ0jtjLqGpZnE";


const LocationCard = (props) => {
  const {
    name,
    _id,
    photos,
  } = props.location;

  return (
    <a className="location-link" href={"/locations/" + _id}>
      <div className="location-card">
        <div className="location-img-container">
          <img
            className="location-img"
            alt={name}
            src={imgUrl + 'maxwidth=' + photos[0].width + '&photoreference=' + photos[0].photo_reference + '&key=' + api_key}
          />
        </div>
        <div className="location-name">
          <h4>{name}</h4>
        </div>
      </div>
    </a>
  );
};

export default LocationCard;