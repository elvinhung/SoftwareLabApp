import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
import ModelPage from "../components/ModelPage";
import InstanceGenerator from "../api/API";

const Location = (props) => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const filters = queryString.parse(props.location.search);

  return (
    <div>
      <InstanceGenerator model={"locations"} setInstances={setLocations} setLoading={setLoading} query={props.location.search}/>
      <ModelPage model={"Location"} instances={locations} pagesAtTime={7} filters={filters} isLoading={isLoading}/>
    </div>
  );
}

export default withRouter(Location);