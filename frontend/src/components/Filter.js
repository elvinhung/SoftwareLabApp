import React from 'react';
import "../styles/Filters.css";

const Filter = (props) => {

  const {
    type,
    options,
  } = props;

  return (
    <div className="filter">
      <form>
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