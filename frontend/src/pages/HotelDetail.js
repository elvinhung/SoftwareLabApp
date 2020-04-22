import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/HotelDetail.css';
import '../styles/InstanceStyles.css';
import PhotoCarousel from "../components/PhotoCarousel";
import { title } from '../Utils';
import NearbyRestaurantListing from "../components/NearbyRestaurantListing";
import Loader from "../components/Loader";
import TagList from "../components/TagList";

const mapStyle = {
  width: '25vw',
  height: '25vh'
}

const HotelDetail = (props) => {
  const id = props.match.params.id;
  const [hotel, setHotel] = useState({});
  const [address, setAddress] = useState("");
  const [isLoading, setLoading] = useState(true);

  function getHotel() {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/hotels/' + id;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setHotel((prevData) => {
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
    if (Object.keys(hotel).length !== 0) {
      const { address } = hotel;
      setAddress(title(address.lines[0]) + ', ' + title(address.cityName) + ', ' + address.stateCode + ' ' + address.postalCode);
    }
  }, [hotel]);

  useEffect(() => {
    getHotel();
  }, []);

  let tags = [hotel.stars + " Stars"];

  if (Object.keys(hotel).length !== 0) {
    if (hotel.swimming_pool)
      tags.push("Pool");
    if (hotel.description == null) {
      hotel.description = "No description available.";
    }
  }

  return(
    <div>
      {Object.keys(hotel).length !== 0 &&
      hotel.restaurants.sort(function(a, b){ return parseFloat(a.distance) - parseFloat(b.distance)}) &&
        <div>
          <div className="instance_head">
            <div><PhotoCarousel image1={hotel.image} image2={hotel.image} image3={hotel.image}/></div>
            <div className="instance_head_info">
              <h1>{hotel.name}</h1>
              <div className="location">
                <a className="location_link" href={"/locations/" + hotel.location_id}>{title(hotel.address.cityName) + ', ' + hotel.address.stateCode}</a>
              </div>
              <Ratings rating={hotel.stars}/>
              <TagList className="tag_list_container" tags={tags}/>
              <p>
                <i className="fa fa-map-marker contact"></i>{address}
                <br/>
                <i className="fa fa-phone contact"></i>{hotel.contact.phone}
              </p>
            </div>
          </div>
          <div className="hotel_info">
            <div className="hotel_left_info">
              <iframe className="map" frameBorder='0'
                      scrolling='no' marginHeight='0' marginWidth='0'
                      src={'https://maps.google.com/maps/embed/v1/place?q='+address+'&key=AIzaSyAY1pilCxM5qWgNJQCeiTPvqz5m2qiHE94'}>
              </iframe>
            </div>
            <div className="hotel_right_info">
              <p>{hotel.description}</p>
            </div>
          </div>
          <div className="model-container">
            <h3>Nearby Restaurants</h3>
            <div className="listing_container">
              {hotel.restaurants.map((restaurant, index) => {
                return <NearbyRestaurantListing restaurant={restaurant} key={index}/>
              })}
            </div>
          </div>
        </div>
      }
      {isLoading && <Loader />}
      {!isLoading && Object.keys(hotel).length === 0 &&
      <div className="error" align="center">
        <h1>Hotel not found</h1>
      </div>
      }
    </div>
  );
}

export default withRouter(HotelDetail);