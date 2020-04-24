import React, {useEffect, useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Ratings from "../components/Ratings";
import TagList from "./TagList";
import '../styles/ModelPage.css';
import { title } from '../Utils';

const HotelListing = (props) => {
  const [location, setLocation] = useState([]);
  const {
    hotel: {
      name,
      image,
      stars,
      address,
      swimming_pool,
      location_id,
      _id,
    }
  } = props;

  function getLocation() {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/locations/' + location_id;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setLocation((prevData) => {
          return data;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getLocation();
  },[]);

  let tags = [stars + " Stars"];
  if (swimming_pool)
    tags.push("Pool");

  return(
    <div>
      <a className="listing" title={name} href={"/hotels/" + _id.$oid}>
        <div className="instance">
          <div className="img_container">
            <img className="instance_img" src={image} alt={name}/>
          </div>
          <div>
            <h4 className="instance_name">{name}</h4>
          </div>
          <div className="instance_page_info">
            <p className="instance_location">{location.name + ", " + location.country}</p>
            <Ratings rating={stars}/>
            <TagList className="tag_list_container" tags={tags}/>
          </div>
        </div>
      </a>
    </div>
  );

}

export default HotelListing;