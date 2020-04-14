import React from 'react';
import '../styles/Home.css';
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
  return(
    <div className="home-page-container">
      <div className="title-container">
        <h1>Where to?</h1>
      </div>
      <div className="form-container">
        <input className="search-bar" placeholder="Anywhere" type="text" />
        <button className="search-btn"><i className="fa fa-search"></i></button>
      </div>
    </div>
  );
}

export default Home;
