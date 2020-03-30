import React from 'react';
import Spinner from "react-bootstrap/Spinner"
import "../styles/Loader.css";

const Loader = () => {
  return(
    <div className="spinner-container" align="center">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;