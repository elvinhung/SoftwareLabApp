import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Ratings from "../components/Ratings";
import '../styles/ModelPage.css';

const Review = (props) => {
  return(
    <div>
      <div className="instance_location"><p>{props.review.user_name}</p></div>
      <div><Ratings rating={props.review.stars}/></div>
      <p className="review">{props.review.text}</p>
    </div>
  );
}

export default Review;