import React from 'react';
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
      _id,
    }
  } = props;
  const cuisine = props.restaurant.tags;
  let tags = [];

  let priceDollars = "";
  for (let i = 0; i < price[0].length; i++) {
    priceDollars += "$";
  }
  tags.push(priceDollars);
  for (let i = 0; i < cuisine[0].length; i++) {
    tags.push(cuisine[0][i].title);
  }

  return(
    <div>
      <a className="listing" href={"/restaurants/" + _id.$oid}>
        <div className="instance">
          <div className="img_container">
            <img className="instance_img" src={images[0][0]} alt={name[0]}/>
          </div>
          <div>
            <h4 className="instance_name">{name[0]}</h4>
          </div>
          <div className="instance_page_info">
            <p className="instance_location">{(address[0][address[0].length - 1]).substring(0, (address[0][address[0].length - 1]).length - 6)}</p>
            <Ratings rating = {stars[0]}/>
            <TagList className="tag_list_container" tags={tags}/>
          </div>
        </div>
      </a>
    </div>
  );
}

export default RestaurantListing;