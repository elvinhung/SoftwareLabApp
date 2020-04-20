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
      type: "Population",
      options: [
        {
          name: "5 million+",
          value: "5mil"
        },
        {
          name: "2.5 - 5 million",
          value: "2.5mil"
        },
        {
          name: "1 - 2.5 million",
          value: "1mil"
        },
        {
          name: "0 - 1 million",
          value: "0mil",
        }
      ]
    },
    {
      type: "Country",
      options: [
        {
          name: "United States",
          value: "USA",
        },
        {
          name: "United Kingdom",
          value: "UK",
        },
        {
          name: "Canada",
          value: "CAN"
        }
      ],
    }
  ],
  restaurant: [
    {
      type: "Price",
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
    }
  ],
  hotel: [

  ],
};

const SearchFilterModal = (props) => {
  const {
    searchType,
    showFilter,
    filters,
    setFilters,
    handleFilterClose,
    handleFilterSave
  } = props;

  const Filters = () => {
    switch (searchType) {
      case 'Location':
        return <SearchFilters filterOptions={filterOptions.location} filters={filters} setFilters={setFilters}/>
      case 'Restaurant':
        return <SearchFilters filterOptions={filterOptions.restaurant} filters={filters} setFilters={setFilters}/>
      case 'Hotel':
        return <SearchFilters filterOptions={filterOptions.hotel} filters={filters} setFilters={setFilters}/>
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
        <Button id="filter-cancel-btn" className="search-filter-btn" onClick={handleFilterClose}>
          Cancel
        </Button>
        <Button id="filter-save-btn" onClick={handleFilterSave}>
          Apply
        </Button>
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
  const defaultQuery = props.filters["name"] ? props.filters["name"] : "";
  const [query, setQuery] = useState(defaultQuery);
  const [searchType, setSearchType] = useState(props.type);
  const [showFilter, setShowFilter] = useState(false);
  const [isSearching, setSearching] = useState(false);
  const [redirect, setRedirect] = useState({});


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
      delete filters.name;
    } else {
      filters.name = query.trim();
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
          search: '?name=' + query.trim(),
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
  const handleFilterSave = () => {
    filters = { ...tempFilters };
    handleFilterClose();
    handleSubmit();
  }
  const handleFilterClose = () => setShowFilter(false);
  const handleFilterShow = () => setShowFilter(true);
  const handleSearchTypeChange = (type) => {
    setSearchType((prevSearchType) => {
      if (type !== prevSearchType) {
        console.log("setting new filters");
        filters = {
          name: query,
        }
        console.log(filters);
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
        searchType={searchType}
        showFilter={showFilter}
        filters={filters}
        setFilters={setTempFilters}
        handleFilterClose={handleFilterClose}
        handleFilterSave={handleFilterSave}
      />
    </div>
  );
}

export default Search;