import React from 'react';
import Filter from "../components/Filter";
import "../styles/Filters.css";

const locationOptions = [
  {
    name: 'United States',
    value: 'USA'
  },
  {
    name: 'Canada',
    value: 'CAN'
  }
];

const locationOptions1 = [
  {
    name: 'United States',
    value: 'USAA'
  },
  {
    name: 'Canada',
    value: 'CANA'
  }
];

const test = {
  Country: null,
  Country1: null,
}

const LocationFilters = (props) => {
  const {
    setFilters
  } = props;

  const onChange = (name, value) => {
    test[name] = value;
    setFilters(test);
  }

  return (
    <div className="filter-container">
      <Filter type="Country" onChange={onChange} options={locationOptions} />
      <Filter type="Country1" onChange={onChange} options={locationOptions1} />
    </div>
  );
}

export default LocationFilters;