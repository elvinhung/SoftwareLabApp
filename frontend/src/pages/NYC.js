import React from 'react';
import Header from "../components/Header";
import '../styles/Location.css';

const NYC = () => {
  return (
    <div>
      <Header />
      <div className="location-splash-img">
        <img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,f_auto,q_auto,w_250/v1582947101/MC_CSS_aw9xgq.png" alt="sf" />
      </div>
      <div className="location-splash-content">
        <h1 className="location-splash-header">New York</h1>
      </div>
    </div>
  );
};

export default NYC;