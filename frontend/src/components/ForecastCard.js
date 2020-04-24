import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Ratings from "../components/Ratings";
import TagList from "./TagList";
import '../styles/Forecast.css';

const ForecastCard = (props) => {
  const {
    day,
    temp
  } = props;

  return(
    <div>
      <div className="forecast-container listing">
        <h5 className="forecast-day">{day}</h5>
        <div className="forecast-info">
          <p className="forecast-temp">{temp}</p>
        </div>
        <div className="float-clear"></div>
      </div>
    </div>
  );
}

export default ForecastCard;