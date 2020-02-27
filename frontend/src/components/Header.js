import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/locations">Locations</Link>
      <Link to="/hotels">Hotels</Link>
      <Link to="/restaurants">Restaurants</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Header;
