import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Ratings = (props) => {
  if (props.rating === 5.0) {
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
  else if (props.rating === 4.5) {
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
  else if (props.rating === 4.0) {
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
  else if (props.rating === 3.5) {
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
  else if (props.rating === 3.0) {
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
  else if (props.rating === 2.5) {
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
  else if (props.rating === 2.0) {
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
  else if (props.rating === 1.5) {
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
  else if (props.rating === 1.0) {
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
  else if (props.rating === .5) {
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