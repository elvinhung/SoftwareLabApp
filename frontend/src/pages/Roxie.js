import React from 'react';
import Header from "../components/Header";
import * as rating from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../App.css'
import roxie from "../roxie_food_center.jpg";

const Roxie = () => {
  return(

    <div>
      <Header />
      <h1>Roxie Food Center</h1>

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

export default Roxie;