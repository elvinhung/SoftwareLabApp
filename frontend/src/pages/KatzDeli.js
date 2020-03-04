import React from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../App.css'
import PhotoCarousel from "../components/PhotoCarousel";

const KatzDeli = () => {
  const images = {
    img1: "katz's_delicatessen.jpg",
    img2: "attendant_fitzrovia.jpg",
    img3: "roxie_food_center.jpg"
  };

  return(
    <div>
      <Header />

      <div class="instance_head">

        <div><PhotoCarousel images={images}/></div>
        <div class="instance_page_info">
          <h2>Katz's Delicatessen</h2>
          <Ratings rating={"RatingFourAndHalf"}/>
          <p>No-frills deli with theatrically cranky service serving mile-high sandwiches since 1888.</p>
        </div>
      </div>
    </div>
  );
}

export default KatzDeli;