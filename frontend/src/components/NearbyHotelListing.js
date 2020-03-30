import React, { useState, useEffect } from 'react';
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/Listings.css';
import Spinner from "react-bootstrap/Spinner";

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
          <div>
            <img className="instance_img" src={hotel.image} alt={hotel.name}/>
          </div>
          <div className="instance_page_info">
            <div className="instance_name"><h3>{hotel.name}</h3></div>
            <div className="distance"><h3>{props.hotel.distance + " away"}</h3></div>
            <div className="instance_location"><p>{hotel.address.cityName + ', ' + hotel.address.stateCode}</p></div>
            <div><Ratings rating={hotel.stars}/></div>
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