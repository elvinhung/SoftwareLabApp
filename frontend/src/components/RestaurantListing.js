import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Ratings from "../components/Ratings";
import '../styles/ModelPage.css';

const RestaurantListing = (props) => {
  const {
    restaurant: {
      name,
      image,
      stars,
      price,
      address,
      _id,
    }
  } = props;

  return(
    <div>
      <a className="listing" href={"/restaurants/" + _id.$oid}>
        <div className="instance">
          <div className="img_container">
            <img className="instance_img" src={image[0]} alt={name[0]}/>
          </div>
          <div className="instance_name">
            <h4>{name[0] + " (" + price + ")"}</h4>
          </div>
          <div className="instance_page_info">
            <div className="instance_location"><p>{(address[0][address[0].length - 1]).substring(0, (address[0][address[0].length - 1]).length - 6)}</p></div>
            <div><Ratings rating = {stars[0]}/></div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default RestaurantListing;