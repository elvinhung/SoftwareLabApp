import React from 'react';
import Filter from "../components/Filter";
import "../styles/Filters.css";

const SearchFilters = (props) => {
  const {
    setFilters,
    filters,
    filterOptions,
    cleared,
  } = props;

  const onChange = (name, value) => {
    setFilters(name, value);
  }

  return (
    <div className="filter-container">
      {filterOptions.map(filterOption => (
        <Filter
          key={filterOption.value}
          name={filterOption.name}
          value={filterOption.value}
          filters={filters}
          cleared={cleared}
          onChange={onChange}
          options={filterOption.options}
        />
      ))}
    </div>
  );
}

export default SearchFilters;