import React from 'react';
import Header from "../components/Header";
import * as rating from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../App.css'
import katz from "../katz's_delicatessen.jpg";
import PhotoCarousel from "../components/PhotoCarousel";

const KatzDeli = () => {
  return(

    <div>
      <Header />

      <div class="instance_head">

        <div><PhotoCarousel/></div>
        <div class="instance_page_info">
          <h2>Katz's Delicatessen</h2>
          <rating.RatingFourAndHalf/>
          <p>No-frills deli with theatrically cranky service serving mile-high sandwiches since 1888.</p>
        </div>
      </div>
    </div>
  );
}

export default KatzDeli;