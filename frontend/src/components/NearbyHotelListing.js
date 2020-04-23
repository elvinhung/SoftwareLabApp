import React, { useState, useEffect } from 'react';
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/Listings.css';
import Spinner from "react-bootstrap/Spinner";
import {title} from "../Utils";
import TagList from "./TagList";

const NearbyHotelListing = (props) => {
  const id = props.hotel.id.$oid;
  const [hotel, setHotel] = useState({});

  function getHotel() {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/hotels/' + id;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setHotel(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getHotel();
  }, []);

  let tags = [];
  tags.push(props.hotel.distance + " away", hotel.stars + " Stars")
  if (hotel.swimming_pool)
    tags.push("Pool");

  return(
    <div>
      {Object.keys(hotel).length !== 0 &&
      <a className="listing" href={"/hotels/" + id}>
        <div className="instance">
          <div className="img_container">
            <img className="instance_img" src={hotel.image} alt={hotel.name}/>
          </div>

          <div>
            <h4 className="instance_name">{hotel.name}</h4>
          </div>
          <div className="instance_page_info">
            <p className="instance_location">{hotel.address.cityName + ', ' + hotel.address.stateCode}</p>
            <Ratings rating={hotel.stars}/>
            <TagList className="tag_list_container" tags={tags}/>
          </div>
        </div>
      </a>
      }
      {hotel.length === 0 &&
      <div align="center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
      }
    </div>
  );
}

export default NearbyHotelListing;