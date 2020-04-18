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
        <form classname="search-form" action="/search?">
          <input name="q" id="textSearch" className="search-bar" placeholder="Anywhere" type="text"/>
          <button type="submit" className="search-btn"><i className="fa fa-search"></i></button>
        </form>
      </div>
    </div>
  );
}

export default Home;
