import React from 'react';
import Header from "../components/Header";
import * as rating from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';

const Restaurant = () => {
  return(

    <div>
      <Header />
      <h1>Restaurants</h1>
      <div><rating.RatingThreeAndHalf/></div>


    </div>
  );
}

export default Restaurant;