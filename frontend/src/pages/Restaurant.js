import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import queryString from "query-string";
import ModelPage from "../components/ModelPage";
import InstanceGenerator from "../api/API";

const Restaurant = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const filters = queryString.parse(props.location.search);

  return (
    <div>
      <InstanceGenerator model={"restaurants"} setInstances={setRestaurants} setLoading={setLoading} query={props.location.search}/>
      <ModelPage model={"Restaurant"} instances={restaurants} pagesAtTime={10} filters={filters} isLoading={isLoading}/>
    </div>
  );
}

export default withRouter(Restaurant);