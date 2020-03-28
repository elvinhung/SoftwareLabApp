import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Ratings from "../components/Ratings";
import '../styles/ModelPage.css';

const HotelListing = (props) => {
  const {
    hotel: {
      name,
      image,
      contact,
      stars,
      address,
      _id,
      location_id,
      description,
    }
  } = props;
  return(
    <div>
      <a className="listing" href={"/hotels/" + _id.$oid}>
        <div className="instance">
          <div>
            <img className="instance_img" src={image} alt={name}/>
          </div>
          <div className="instance_page_info">
            <h2 className="instance_name">{name}</h2>
            <div className="instance_location"><p>{address.cityName + ', ' + address.stateCode}</p></div>
            <div><Ratings rating={stars}/></div>
          </div>
        </div>
      </a>
    </div>
  );

}

export default HotelListing;