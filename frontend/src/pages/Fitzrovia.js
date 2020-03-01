import React from 'react';
import Header from "../components/Header";
import * as rating from "../components/Ratings";
import 'font-awesome/css/font-awesome.min.css';
import '../App.css'
import fitzrovia from "../attendant_fitzrovia.jpg";

const Fitzrovia = () => {
  return(

    <div>
      <Header />
      <h1>Attendant Fitzrovia</h1>

      <a href={"/restaurants/attendant_fitzrovia"}>
        <div className="instance">
          <div>
            <img className="instance_img" src={fitzrovia} alt="Attendant Fitzrovia"/>
          </div>
            <div className="instance_page_info">
            <h2>Attendant Fitzrovia</h2>
            <rating.RatingFourAndHalf/>
            <p>Tiny, quirky coffee bar in restored Victorian public convenience, serving breakfast and light lunch.</p>
          </div>
        </div>
      </a>

    </div>
  );
}

export default Fitzrovia;