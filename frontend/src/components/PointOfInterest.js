import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Ratings from "../components/Ratings";
import TagList from "./TagList";
import '../styles/ModelPage.css';
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

  let tags = [];

  for (let i = 0; i < types.length; i++) {
    types[i] = title(types[i].replace(/_/g, ' '));
  }
  tags.push();

  return(
    <div>
      <div className="instance listing">
        <div className="img_container">
          <img className="instance_img" src={imgUrl + 'maxwidth=' + photos[0].width + '&photoreference=' + photos[0].photo_reference + '&key=' + api_key}/>
        </div>
        <div>
          <h4 className="instance_name">{name}</h4>
        </div>
        <div className="instance_page_info">
          <p className="instance_location">{formatted_address}</p>
          <Ratings rating = {Math.round(rating*2)/2}/>
          <TagList className="tag_list_container" tags={types}/>
        </div>
      </div>
    </div>
  );
}

export default PointOfInterest;