import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import HotelListing from "../components/HotelListing";
import '../styles/ModelPage.css';
import Spinner from "react-bootstrap/Spinner";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Search from "../components/Search";
import queryString from "query-string";

const PAGE_SIZE = 12;

const Hotel = (props) => {
  const [hotels, setHotels] = useState([]);
  const [curPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const filters = queryString.parse(props.location.search);

  function getHotels() {
      const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/hotels';
      fetch(apiUrl + props.location.search)
        .then((res) => res.json())
        .then((data) => {
          setHotels((prevData) => {
            setLoading(false);
            return data;
          });
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
  }

  useEffect(() => {
    getHotels();
  }, [props.location.search]);

  let hotelsPage = [];
  for (let i = 0; i < hotels.length; i += PAGE_SIZE) {
    hotelsPage.push(hotels.slice(i, i + PAGE_SIZE));
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(hotels.length / PAGE_SIZE);

  return(
    <div>
      <Search type="Hotel" filters={filters} />
      {hotels.length !== 0 &&
      hotels.sort(function(a, b){ if (a.name < b.name) return -1; else return 1;}) &&
        <div className="model-container">
          <h1 className="model-header">Hotels</h1>
          <div className="listing_padding">
            <div className="listing_container">
              {hotelsPage[curPage - 1].map((hotel, index) => {
                return <HotelListing hotel={hotel} key={index}/>
              })}
            </div>
          </div>
          {hotels.length === 0 &&
          <div align="center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
          }
          <Pagination postsPerPage={PAGE_SIZE} totalPosts={hotels.length} paginate={paginate} curPage={curPage} pagesAtTime={(totalPages >= 10 ? 10 : totalPages)}/>
          <p align="center"> Page {curPage} / {totalPages}</p>
        </div>
      }
      {isLoading && <Loader />}
      {!isLoading && hotels.length === 0 &&
        <div className="error" align="center">
          <h1>No hotels found</h1>
        </div>
      }

    </div>
  );
}

export default Hotel;