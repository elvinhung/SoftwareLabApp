import React, { useState, useEffect } from 'react';
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/Listings.css';
import Spinner from "react-bootstrap/Spinner";
import {title} from "../Utils";

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

  return(
    <div>
      {Object.keys(hotel).length !== 0 &&
      <a className="listing" href={"/hotels/" + id}>
        <div className="instance">
          <div className="img_container">
            <img className="instance_img" src={hotel.image} alt={hotel.name}/>
          </div>

          <div className="instance_name">
            <h4>{hotel.name}</h4>
          </div>
          <div className="instance_page_info">
            <div className="instance_location"><p>{hotel.address.cityName + ', ' + hotel.address.stateCode}</p></div>
            <div><Ratings rating={hotel.stars}/></div>
            <div className="distance"><p>{props.hotel.distance + " away"}</p></div>
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