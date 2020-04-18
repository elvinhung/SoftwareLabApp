import React from 'react';
import "../styles/Filters.css";

const Filter = (props) => {

  const {
    type,
    options,
    onChange,
  } = props;

  const handleChange = (event) => {
    onChange(type, event.target.value);
  }

  return (
    <div className="filter">
      <form onChange={handleChange}>
        <h6>{type}</h6>
        <ul className="filter-list">
          {options.map(option => (
            <li key={option.value}>
              <div className="pretty p-default p-curve">
                <input type="radio" name="color" value={option.value} />
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