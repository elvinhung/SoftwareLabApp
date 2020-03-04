import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Ratings = (props) => {
  if (props.rating == "RatingFive") {
    return (
      <div>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
      </div>
    );
  }
  else if (props.rating == "RatingFourAndHalf") {
    return (
      <div>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
      </div>
    );
  }
  else if (props.rating == "RatingFour") {
    return (
      <div>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
      </div>
    );
  }
  else if (props.rating == "RatingThreeAndHalf") {
    return (
      <div>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
      </div>
    );
  }
  else if (props.rating == "RatingThree") {
    return (
      <div>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
      </div>
    );
  }
  else if (props.rating == "RatingTwoAndHalf") {
    return (
      <div>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
      </div>
    );
  }
  else if (props.rating == "RatingTwo") {
    return (
      <div>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
      </div>
    );
  }
  else if (props.rating == "RatingOneAndHalf") {
    return (
      <div>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
      </div>
    );
  }
  else if (props.rating == "RatingOne") {
    return (
      <div>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
      </div>
    );
  }
  else if (props.rating == "RatingHalf") {
    return (
      <div>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
      </div>
    );
  }
  else if (props.rating == "RatingZero") {
    return (
      <div>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
      </div>
    );
  }
}

export default Ratings;