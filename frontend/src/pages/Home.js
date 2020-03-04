import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';

const Home = () => {
  return(
    <div>
      <Header />
      <div className="home-page-container">
        <div className="title-container">
          <h1>Where to?</h1>
        </div>
        <div className="form-container">
          <input className="search-bar" type="text" />
        </div>
      </div>
    </div>
  );
}

export default Home;
