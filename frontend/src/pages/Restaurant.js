import React from 'react';
import Header from "../components/Header";
import * as rating from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../App.css'
import katz from "../katz's_delicatessen.jpg";
import fitzrovia from "../attendant_fitzrovia.jpg";
import roxie from "../roxie_food_center.jpg";

const Restaurant = () => {
  return(

    <div>
      <Header />
      <h1>Restaurants</h1>

      <a href={"/restaurants/katz's_delicatessen"}>
        <div class="instance">
          <div>
            <img className="instance_img" src={katz} alt="Katz' Delicatessen"/>
          </div>
          <div class="instance_info">
            <h2>Katz's Delicatessen</h2>
            <rating.RatingFourAndHalf/>
            <p>No-frills deli with theatrically cranky service serving mile-high sandwiches since 1888.</p>
          </div>
        </div>
      </a>

      <a href={"/restaurants/attendant_fitzrovia"}>
        <div className="instance">
          <div>
            <img className="instance_img" src={fitzrovia} alt="Attendant Fitzrovia"/>
          </div>
          <div className="instance_info">
            <h2>Attendant Fitzrovia</h2>
            <rating.RatingFourAndHalf/>
            <p>Tiny, quirky coffee bar in restored Victorian public convenience, serving breakfast and light lunch.</p>
          </div>
        </div>
      </a>

      <a href={"/restaurants/roxie_food_center"}>
        <div className="instance">
          <div>
            <img className="instance_img" src={roxie} alt="Roxie Food Center"/>
          </div>
          <div className="instance_info">
            <h2>Roxie Food Center</h2>
            <rating.RatingFive/>
            <p>Easygoing canteen with a welcoming atmosphere specializing in hearty deli sandwiches.</p>
          </div>
        </div>
      </a>

    </div>
  );
}

export default Restaurant;