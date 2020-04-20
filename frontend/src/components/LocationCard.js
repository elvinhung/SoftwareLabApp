import React from 'react';
import '../styles/LocationCard.css';
import TagList from "./TagList";

const imgUrl = "https://maps.googleapis.com/maps/api/place/photo?";
const api_key = "AIzaSyBJ2lOAHkcMp6O6SpyeRNcQ0jtjLqGpZnE";


const LocationCard = (props) => {
  const {
    name,
    _id,
    photos,
  } = props.location;

  const tags = ["Population (placeholder)"];

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
        <div className="instance_name">
          <h4>{name}</h4>
        </div>
        <div className="instance_page_info">
          <TagList className="tag_list_container" tags={tags}/>
        </div>
      </div>
    </a>
  );
};

export default LocationCard;