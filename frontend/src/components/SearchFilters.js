import React, { useEffect } from 'react';
import Filter from "../components/Filter";
import "../styles/Filters.css";

const SearchFilters = (props) => {
  const {
    setFilters,
    filters,
    filterOptions,
    sortOptions,
    cleared,
  } = props;

  useEffect(() => {}, [filters]);

  const onChange = (name, value) => {
    setFilters(name, value);
  }

  return (
    <div className="filter-container">
      {filterOptions.map((filterOption, index) => (
        <Filter
          key={index}
          name={filterOption.name}
          value={filterOption.value}
          filters={filters}
          cleared={cleared}
          onChange={onChange}
          options={filterOption.options}
        />
      ))}
      <Filter
        name="Sort By"
        value="sortBy"
        filters={filters}
        cleared={cleared}
        onChange={onChange}
        options={sortOptions}
      />
    </div>
  );
}

export default SearchFilters;