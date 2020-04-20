import React, { useState } from 'react';
import "../styles/Filters.css";

const Filter = (props) => {
  // filters with more than 10 options will display a filter search input
  const [filterQuery, setFilterQuery] = useState("");
  const {
    type,
    options,
    onChange,
    filters,
  } = props;

  const handleChange = (event) => {
    onChange(type, event.target.value);
  }

  const handleFilterQueryChange = event => {
    setFilterQuery(event.target.value);
  }

  return (
    <div className="filter">
      <form onChange={handleChange}>
        <h6>{type}</h6>
        {options.length > 7 &&
          <input type="text" id="filter-input" value={filterQuery} placeholder="Filter" onChange={handleFilterQueryChange} />
        }
        <ul className="filter-list">
          {options.filter((option) => option.name.toLowerCase().startsWith(filterQuery.toLowerCase())).map(option => (
            <li key={option.value}>
              <div className="pretty p-default p-curve">
                {filters[type] === option.value && <input type="radio" defaultChecked name="color" value={option.value} />}
                {filters[type] !== option.value && <input type="radio" name="color" value={option.value} />}
                <div className="state p-primary-o">
                  <label>{option.name}</label>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Filter;