import React, {useEffect, useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Ratings from "../components/Ratings";
import TagList from "./TagList";
import '../styles/ModelPage.css';

const RestaurantListing = (props) => {
  const {
    restaurant: {
      name,
      images,
      stars,
      price,
      address,
      cityName,
      countryCode,
      _id,
    }
  } = props;
  const cuisine = props.restaurant.tags;

  let tags = [];

  let priceDollars = "";
  for (let i = 0; i < price; i++) {
    priceDollars += "$";
  }
  tags.push(priceDollars);
  for (let i = 0; i < cuisine[0].length; i++) {
    tags.push(cuisine[0][i].title);
  }

  return(
    <div>
      <a className="listing" title={name[0]} href={"/restaurants/" + _id.$oid}>
        <div className="instance">
          <div className="img_container">
            <img className="instance_img" src={images[0][0]} alt={name[0]}/>
          </div>
          <div>
            <h4 className="instance_name">{name[0]}</h4>
          </div>
          <div className="instance_page_info">
            <p className="instance_location">{cityName + ", " + countryCode}</p>
            <Ratings rating = {stars[0]}/>
            <TagList className="tag_list_container" tags={tags}/>
          </div>
        </div>
      </a>
    </div>
  );
}

export default RestaurantListing;