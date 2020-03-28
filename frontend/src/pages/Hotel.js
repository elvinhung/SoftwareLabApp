import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import 'font-awesome/css/font-awesome.min.css';
import HotelListing from "../components/HotelListing";
import '../styles/ModelPage.css';
import Spinner from "react-bootstrap/Spinner";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);

  function getHotels() {
      const apiUrl = 'http://nomad.eba-23hxbapp.us-east-2.elasticbeanstalk.com/hotels';
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          setHotels(data);
        })
        .catch((err) => {
          console.log(err);
        });
  }

  useEffect(() => {
    getHotels();
  }, []);

  return(
    <div>
      <Header />
      <h1 className="model-header">Hotels</h1>
      <div className="listing_container">
        {hotels.map((hotel, index) => {
          return <HotelListing hotel={hotel} key={index}/>
        })}
      </div>
      {hotels.length === 0 &&
        <div align="center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      }
    </div>
  );
}

export default Hotel;