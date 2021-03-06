import React, {useEffect, useState} from 'react';
import LocationCard from "./LocationCard";
import RestaurantListing from "./RestaurantListing";
import HotelListing from "./HotelListing";
import NearbyRestaurantListing from "./NearbyRestaurantListing";
import NearbyHotelListing from "./NearbyHotelListing";

const Listing = (props) => {
  const {
    key,
    type,
    instance
  } = props;

  switch (type) {
    case "Location":
      return <LocationCard key={key} location={instance}/>
      break;
    case "Hotel":
      return <HotelListing key={key} hotel={instance}/>
      break;
    case "Restaurant":
      return <RestaurantListing key={key} restaurant={instance}/>
      break;
    case "Nearby Hotel":
      return <NearbyHotelListing key={key} hotel={instance}/>
      break;
    case "Nearby Restaurant":
      return <NearbyRestaurantListing key={key} restaurant={instance}/>
      break;
    default:
      return <p> Instance not found </p>
  }
}

export default Listing;