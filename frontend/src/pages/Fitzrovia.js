import React from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/RestaurantInstance.css';
import PhotoCarousel from "../components/PhotoCarousel";

const Fitzrovia = () => {
  const images = {
    img1: "assets/katz's_delicatessen.jpg",
    img2: "assets/attendant_fitzrovia.jpg",
    img3: "assets/roxie_food_center.jpg"
  };

  return(
    <div>
      <Header />

      <div class="instance_head">

        <div><PhotoCarousel images={images}/></div>
        <div class="instance_page_info">
          <h2>Attendant Fitzrovia</h2>
          <Ratings rating={"RatingFourAndHalf"}/>
          <p>Tiny, quirky coffee bar in restored Victorian public convenience, serving breakfast and light lunch.</p>
        </div>
      </div>
    </div>
  );
}

export default Fitzrovia;