import React from 'react';
import Filter from "../components/Filter";
import "../styles/Filters.css";

const SearchFilters = (props) => {
  const {
    setFilters,
    filters,
    filterOptions,
  } = props;

  const onChange = (name, value) => {
    setFilters((prevFilters) => {
      prevFilters[name] = value;
      return prevFilters;
    });
  }

  return (
    <div className="filter-container">
      {filterOptions.map(filterOption => (
        <Filter
          key={filterOption.type}
          type={filterOption.type}
          filters={filters}
          onChange={onChange}
          options={filterOption.options}
        />
      ))}
    </div>
  );
}

export default SearchFilters;