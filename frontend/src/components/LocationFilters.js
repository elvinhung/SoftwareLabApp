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


const LocationFilters = (props) => {
  const {
    setFilters,
    filters,
  } = props;

  const onChange = (name, value) => {
    setFilters((prevFilters) => {
      prevFilters[name] = value;
      console.log(prevFilters);
      return prevFilters;
    });
  }

  return (
    <div className="filter-container">
      <Filter type="Country" filters={filters} onChange={onChange} options={locationOptions} />
      <Filter type="Country1" filters={filters} onChange={onChange} options={locationOptions1} />
    </div>
  );
}

export default LocationFilters;