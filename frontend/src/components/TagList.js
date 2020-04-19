import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Ratings from "../components/Ratings";
import '../styles/ModelPage.css';

const TagList = (props) => {
  return(
    <div>
      <div className="tag_list_padding">
        <div className="tag_list_container">
          {props.tags.map((tag) => {
            return <p className="tag"> {tag} </p>
          })}
        </div>
      </div>
    </div>
  );
}

export default TagList;