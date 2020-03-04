import React from 'react';
import Header from "../components/Header";
import Ratings from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../styles/RestaurantInstance.css';
import PhotoCarousel from "../components/PhotoCarousel";

const FishHouse = () => {
  const images = {
    img1: "assets/fish_house.jpg",
    img2: "assets/fish_house.jpg",
    img3: "assets/fish_house.jpg"
  };

  return(
    <div>
      <Header />

      <div class="instance_head">

        <div><PhotoCarousel images={images}/></div>
        <div class="instance_page_info">
          <h2>Roxie Food Center</h2>
          <Ratings rating={"RatingFour"}/>
          <p>Easygoing canteen with a welcoming atmosphere specializing in hearty deli sandwiches.</p>
        </div>
      </div>
    </div>
  );
}

export default FishHouse;