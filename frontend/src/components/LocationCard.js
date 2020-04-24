import React from 'react';
import '../styles/LocationCard.css';
import TagList from "./TagList";
import Ratings from "./Ratings";

const imgUrl = "https://maps.googleapis.com/maps/api/place/photo?";
const api_key = "AIzaSyBJ2lOAHkcMp6O6SpyeRNcQ0jtjLqGpZnE";


const LocationCard = (props) => {
  const {
    name,
    country,
    location_id,
    photos,
    population,
    weather
  } = props.location;

  const tags = ["Population: " + population[0]];

  return (
    <a className="location-link" href={"/locations/" + location_id.toLowerCase()}>
      <div className="location-card">
        <div className="location-img-container">
          <img
            className="location-img"
            alt={name}
            src={imgUrl + 'maxwidth=' + photos[0].width + '&photoreference=' + photos[0].photo_reference + '&key=' + api_key}
          />
        </div>
        <div className="instance_name">
          <h4>{name + ", " + country}</h4>
        </div>
        <div className="instance_page_info">
          <p className="instance_location">{"Current Temperature: " + weather[0].current["current temp"]}</p>
          <br></br>
          <TagList className="tag_list_container" tags={tags}/>
        </div>
      </div>
    </a>
  );
};

export default LocationCard;