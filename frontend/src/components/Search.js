import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SearchFilters from "./SearchFilters";
import "../styles/Filters.css";
import "../styles/Search.css";

const searchTypes = [
  'All',
  'Location',
  'Restaurant',
  'Hotel'
];

const filterOptions = {
  location: [
    {
      name: 'Sort By',
      value: 'sortBy',
      options: [
        {
          name: "Name (A to Z)",
          value: "name"
        },
        {
          name: "Name (Z to A)",
          value: "name"
        },
      ],
    },
  ],
  restaurant: [
    {
      name: "Sort By",
      value: "sortBy",
      options: [
        {
          name: "Name (A to Z)",
          value: "name",
        },
        {
          name: "Name (Z to A)",
          value: "name",
        }
      ],
    },
    {
      name: "Price",
      value: "price",
      options: [
        {
          name: "$",
          value: 1
        },
        {
          name: "$$",
          value: 2
        },
        {
          name: "$$$",
          value: 3
        }
      ]
    },
    {
      name: "Rating",
      value: "rating",
      options: [
        {
          name: "5 stars & up",
          value: 5,
        },
        {
          name: "4 stars & up",
          value: 4,
        },
        {
          name: "3 stars & up",
          value: 3,
        },
        {
          name: "2 stars & up",
          value: 2,
        },
        {
          name: "1 star & up",
          value: 1,
        }
      ],
    },
  ],
  hotel: [
    {
      name: "Rating",
      value: "rating",
      options: [
        {
          name: "5 stars & up",
          value: 5,
        },
        {
          name: "4 stars & up",
          value: 4,
        },
        {
          name: "3 stars & up",
          value: 3,
        },
        {
          name: "2 stars & up",
          value: 2,
        },
        {
          name: "1 star & up",
          value: 1,
        }
      ],
    },
    {
      name: "Amenities",
      value: "swimming_pool",
      options: [
        {
          name: "Swimming Pool",
          value: "true",
        }
      ],
    }
  ],
};

const SearchFilterModal = (props) => {
  const {
    searchType,
    showFilter,
    filters,
    setFilters,
    handleFilterClose,
    handleFilterClear,
    handleFilterSave,
    cleared,
  } = props;

  const parseLocationData = (locations) => {
    locations.sort(function(a, b){ if (a.name[0] < b.name[0]) return -1; else return 1;})
    let cityFilter = {
      name: "City",
      value: "location_id",
      options: [],
    };
    let countryFilter = {
      name: "Country",
      value: "country",
      options: [],
    };
    let countryOptions = [];
    let cityOptions = [];
    locations.forEach(location => {
      const city = {
        name: location.name,
        value: location.location_id,
      };
      cityOptions.push(city);
    });
    cityFilter.options = cityOptions;
    filterOptions.restaurant.push(cityFilter);
    filterOptions.hotel.push(cityFilter);
  }

  const getLocationFilters = () => {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/locations';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        parseLocationData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getLocationFilters();
  }, []);

  const Filters = () => {
    switch (searchType) {
      case 'Location':
        return <SearchFilters cleared={cleared} filterOptions={filterOptions.location} filters={filters} setFilters={setFilters}/>
      case 'Restaurant':
        return <SearchFilters cleared={cleared} filterOptions={filterOptions.restaurant} filters={filters} setFilters={setFilters}/>
      case 'Hotel':
        return <SearchFilters cleared={cleared} filterOptions={filterOptions.hotel} filters={filters} setFilters={setFilters}/>
      default:
        return <p>No additional filters</p>
    }
  }

  return (
    <Modal id="filter-modal" show={showFilter} onHide={handleFilterClose}>
      <Modal.Header closeButton>
        <Modal.Title>More Filters</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Filters />
      </Modal.Body>
      <Modal.Footer>
        <Button id="filter-clear-btn" onClick={handleFilterClear}>Clear</Button>
        <Button id="filter-cancel-btn" className="search-filter-btn" onClick={handleFilterClose}>Cancel</Button>
        <Button id="filter-save-btn" onClick={handleFilterSave}>Apply</Button>
      </Modal.Footer>
    </Modal>
  );
}


const SearchTypeDropdown = (props) => {
  const {
    searchType,
    handleSearchTypeChange
  } = props;

  return (
    <Dropdown>
      <Dropdown.Toggle id="search-toggle">{searchType}</Dropdown.Toggle>
      <Dropdown.Menu id="search-menu">
        {searchTypes.map((type) => (
          <Dropdown.Item
            key={type}
            onClick={() => handleSearchTypeChange(type)}
          >
            {type}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

let tempFilters = {};
let filters = {};

const Search = (props) => {
  const defaultQuery = props.filters["q"] ? props.filters["q"] : "";
  const [query, setQuery] = useState(defaultQuery);
  const [searchType, setSearchType] = useState(props.type);
  const [showFilter, setShowFilter] = useState(false);
  const [isSearching, setSearching] = useState(false);
  const [redirect, setRedirect] = useState({});
  const [cleared, setCleared] = useState(false);


  useEffect(() => {
    setSearching(false);
    tempFilters = { ...props.filters };
    filters = { ...props.filters };
  }, [props]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  }
  const handleSubmit = () => {
    props.paginate(1);
    if (query.trim() === "") {
      delete filters.q;
    } else {
      filters.q = query.trim();
    }
    const stringifiedQuery = queryString.stringify(filters);
    switch (searchType) {
      case 'Location':
        setRedirect({
          pathname: '/locations',
          search: stringifiedQuery,
        });
        break;
      case 'Restaurant':
        setRedirect({
          pathname: '/restaurants',
          search: stringifiedQuery,
        });
        break;
      case 'Hotel':
        setRedirect({
          pathname: '/hotels',
          search: stringifiedQuery,
        });
        break;
      default:
        setRedirect({
          pathname: '/search',
          search: '?q=' + query.trim(),
        });
        break;
    }
    setSearching(true);
  }
  const handleKeyDown = e => {
    if (e.key === 'Enter') handleSubmit();
  }
  const setTempFilters = (name, value) => {
    tempFilters[name] = value;
  }
  const handleFilterClear = () => {
    tempFilters = {};
    setCleared(true);
  }
  const handleFilterSave = () => {
    filters = { ...tempFilters };
    handleFilterClose();
    handleSubmit();
  }
  const handleFilterClose = () => {
    setShowFilter(false);
    setCleared(false);
  }
  const handleFilterShow = () => setShowFilter(true);
  const handleSearchTypeChange = (type) => {
    setSearchType((prevSearchType) => {
      if (type !== prevSearchType) {
        filters = {
          q: query,
        }
      }
      return type;
    });
  }

  return (
    <div>
      {isSearching &&
        <Redirect
          to={redirect}
        />
      }
      <div className="form-container">
        <input className="search-bar" onChange={handleQueryChange} value={query} placeholder="Search" type="text" onKeyDown={handleKeyDown}/>
        <button onClick={handleSubmit} className="search-btn"><i className="fa fa-search"></i></button>
      </div>
      <div className="filter-btn-container">
        <SearchTypeDropdown
          searchType={searchType}
          handleSearchTypeChange={handleSearchTypeChange}
        />
        <Button id="filter-btn" onClick={handleFilterShow}>More Filters</Button>
      </div>
      <SearchFilterModal
        cleared={cleared}
        searchType={searchType}
        showFilter={showFilter}
        filters={filters}
        setFilters={setTempFilters}
        handleFilterClear={handleFilterClear}
        handleFilterClose={handleFilterClose}
        handleFilterSave={handleFilterSave}
      />
    </div>
  );
}

export default Search;