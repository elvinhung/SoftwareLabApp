import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Ratings from "../components/Ratings";
import '../styles/ModelPage.css';
import { title } from '../Utils';

const HotelListing = (props) => {
  const {
    hotel: {
      name,
      image,
      stars,
      address,
      _id,
    }
  } = props;
  return(
    <div>
      <a className="listing" href={"/hotels/" + _id.$oid}>
        <div className="instance">
          <div className="img_container">
            <img className="instance_img" src={image} alt={name}/>
          </div>
          <div className="instance_name">
            <h4>{name}</h4>
          </div>
          <div className="instance_page_info">
            <div className="instance_location"><p>{title(address.cityName) + ', ' + address.stateCode}</p></div>
            <div><Ratings rating={stars}/></div>
          </div>
        </div>
      </a>
    </div>
  );

}

export default HotelListing;