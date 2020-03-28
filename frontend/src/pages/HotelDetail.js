import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import RestaurantListing from "../components/RestaurantListing";
import Spinner from "react-bootstrap/Spinner";

const HotelDetail = (props) => {
  const id = props.match.params.id;
  const [hotel, setHotel] = useState([]);
  const [address, setAddress] = useState("");

  function getHotel() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://nomad.eba-23hxbapp.us-east-2.elasticbeanstalk.com/hotels/' + id;
    fetch(proxyUrl + apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setHotel(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (hotel.length !== 0) {
      const { address } = hotel[0];
      setAddress(address.lines[0] + ', ' + address.cityName + ', ' + address.stateCode + ' ' + address.postalCode);
    }
  }, [hotel]);

  useEffect(() => {
    getHotel();
  }, []);

  return(
    <div>
      <Header />
      {hotel.length !== 0 &&
        <div>
          <div class="instance_head">
            <div><PhotoCarousel image={hotel[0].image}/></div>
            <div class="instance_head_info">
              <h2>{hotel[0].name}</h2>
              <div className="instance_location">
                <a className="location_link" href={"/locations/" + hotel[0].location_id}>{hotel[0].location_id}</a>
              </div>
              <div><Ratings rating={hotel[0].stars}/></div>
              <p>
                <i className="fa fa-map-marker contact"></i>{address}
                <br/>
                <i className="fa fa-phone contact"></i>{hotel[0].contact.phone}
              </p>
              <p>{hotel[0].description}</p>
            </div>
          </div>
          <div className="information">
            <p>Nearby Restaurants</p>
          </div>
        </div>
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

export default HotelDetail;