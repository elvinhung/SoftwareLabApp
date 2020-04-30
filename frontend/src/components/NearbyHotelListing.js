import React, { useState} from 'react';
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/Listings.css';
import Spinner from "react-bootstrap/Spinner";
import TagList from "./TagList";
import InstanceGenerator from "../api/API";

const NearbyHotelListing = (props) => {
  const id = props.hotel.id.$oid;
  const [hotel, setHotel] = useState({});
  const [isLoading, setLoading] = useState(true);

  let tags = [];
  tags.push(props.hotel.distance + " away", hotel.stars + " Stars")
  if (hotel.swimming_pool)
    tags.push("Pool");

  return(
    <div>
      <InstanceGenerator model={"hotels"} setInstances={setHotel} setLoading={setLoading} query={'/' + id}/>
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
            <p className="instance_location">{hotel.cityName + ", " + hotel.countryCode}</p>
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