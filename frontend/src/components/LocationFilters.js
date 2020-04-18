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
    value: 'USA'
  },
  {
    name: 'Canada',
    value: 'CAN'
  },
  {
    name: 'United States',
    value: 'U'
  },
  {
    name: 'Canada',
    value: 'CN'
  },
  {
    name: 'United States',
    value: 'A'
  },
  {
    name: 'Canada',
    value: 'AN'
  },
  {
    name: 'Canada',
    value: 'CN'
  },
  {
    name: 'United States',
    value: 'A'
  },
  {
    name: 'Canada',
    value: 'AN'
  },
];

const LocationFilters = () => {

  const handleChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <div className="filter-container" onChange={handleChange}>
      <Filter type="Country" options={locationOptions} />
      <Filter type="Country" options={locationOptions} />
      <Filter type="Country" options={locationOptions} />
      <Filter type="Country" options={locationOptions} />
      <Filter type="Country" options={locationOptions} />
      <Filter type="Country" options={locationOptions1} />
    </div>
  );
}

export default LocationFilters;