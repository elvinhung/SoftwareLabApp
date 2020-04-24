import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Ratings from "../components/Ratings";
import TagList from "./TagList";
import '../styles/PointOfInterest.css';
import { title } from '../Utils';

const imgUrl = "https://maps.googleapis.com/maps/api/place/photo?";
const api_key = "AIzaSyBJ2lOAHkcMp6O6SpyeRNcQ0jtjLqGpZnE";

const PointOfInterest = (props) => {
  const {
    poi: {
      name,
      photos,
      rating,
      formatted_address,
      types,
      id,
    }
  } = props;

  for (let i = 0; i < types.length; i++)
    types[i] = title(types[i].replace(/_/g, ' '));
  while (types.length >= 4)
    types.pop();

  return(
    <div>
      <div className="poi-container listing">
        <div className="poi-img-container">
          <img className="poi-img" src={imgUrl + 'maxwidth=' + photos[0].width + '&photoreference=' + photos[0].photo_reference + '&key=' + api_key}/>
        </div>
        <h4 className="poi-name">{name}</h4>
        <div className="poi-info">
          <p className="poi-location">{formatted_address}</p>
          <br></br>
          <Ratings rating = {Math.round(rating*2)/2}/>
          <TagList className="tag_list_container" tags={types}/>
        </div>
        <div className="float-clear"></div>
      </div>
    </div>
  );
}

export default PointOfInterest;