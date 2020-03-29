import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Ratings = (props) => {
  if (props.rating === 5.0 || props.rating === "5") {
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
  else if (props.rating === 4.5 || props.rating === "4.5") {
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
  else if (props.rating === 4.0 || props.rating === "4") {
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
  else if (props.rating === 3.5 || props.rating === "3.5") {
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
  else if (props.rating === 3.0 || props.rating === "3") {
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
  else if (props.rating === 2.5 || props.rating === "2.5") {
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
  else if (props.rating === 2.0 || props.rating === "2") {
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
  else if (props.rating === 1.5 || props.rating === "1.5") {
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
  else if (props.rating === 1.0 || props.rating === "1") {
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
  else if (props.rating === .5 || props.rating === ".5") {
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
  else if (props.rating === 0.0) {
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