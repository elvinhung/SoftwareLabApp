import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Ratings from "../components/Ratings";
import '../styles/ModelPage.css';

const RestaurantListing = (props) => {
  const {
    restaurant: {
      name,
      image,
      reviews,
      contact,
      stars,
      address,
      _id,
      location_id,
    }
  } = props;
  return(
    <div>

      <a className="listing" href={"/restaurants/" + _id.$oid}>
        <div className="instance">
          <div>
            <img className="instance_img" src={image[0]} alt={name[0]}/>
          </div>
          <div className="instance_page_info">
            <h3 className="instance_name">{name[0]}</h3>

            <div className="instance_location"><p>{location_id}</p></div>
            <div><Ratings rating = {stars[0]}/></div>
          </div>
        </div>
      </a>

    </div>
  );

}

export default RestaurantListing;