import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import queryString from "query-string";
import ModelPage from "../components/ModelPage";
import InstanceGenerator from "../api/API";

const Hotel = (props) => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const filters = queryString.parse(props.location.search);

  return (
    <div>
      <InstanceGenerator model={"hotels"} setInstances={setHotels} setLoading={setLoading} query={props.location.search}/>
      <ModelPage model={"Hotel"} instances={hotels} pagesAtTime={10} filters={filters} isLoading={isLoading}/>
    </div>
  );
}

export default withRouter(Hotel);