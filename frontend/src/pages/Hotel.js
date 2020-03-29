import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import 'font-awesome/css/font-awesome.min.css';
import HotelListing from "../components/HotelListing";
import '../styles/ModelPage.css';
import Spinner from "react-bootstrap/Spinner";
import Pagination from "../components/Pagination";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [curPage, setCurrentPage] = useState(1);

  function getHotels() {
      const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/hotels';
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

  var hotelsPage = []
  var i;
  for (i = 0; i < 60; i+=10) {
    hotelsPage.push(hotels.slice(i, i + 10));
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return(
    <div>
      <Header />
      <h1 className="model-header">Hotels</h1>
      <div className="listing_container">
        {hotelsPage[curPage - 1].map((hotel, index) => {
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
      <Pagination postsPerPage={10} totalPosts={60} paginate={paginate}/>
      <p align="center"> Page {curPage}</p>
    </div>
  );
}

export default Hotel;