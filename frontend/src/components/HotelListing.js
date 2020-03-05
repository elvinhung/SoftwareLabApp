import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Ratings from "../components/Ratings";
import '../styles/ModelPage.css';

const HotelListing = (props) => {
  return(
    <div>

      <a className="listing" href={"/hotels/" + props.hotel.URLname}>
        <div className="instance">
          <div>
            <img className="instance_img" src={require("../" + props.hotel.imgURL)} alt={props.hotel.name}/>
          </div>
          <div className="instance_page_info">
            <h2 className="instance_name">{props.hotel.name}</h2>

            <div className="instance_location"><p>{props.hotel.location}</p></div>
            <div><Ratings rating = {props.hotel.rating}/></div>

            <p>{props.hotel.description}</p>
          </div>
        </div>
      </a>

    </div>
  );

}

export default HotelListing;